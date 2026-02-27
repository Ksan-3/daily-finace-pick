// Vercel Cron Job: 6시간마다 자동 뉴스 수집
// vercel.json에서 schedule 설정 필요

import { kv } from '@vercel/kv';

// ===== RSS 파싱 (가벼운 XML 파서) =====
async function parseRSS(url) {
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'application/rss+xml, application/xml, text/xml',
            },
            signal: AbortSignal.timeout(8000),
        });
        const text = await response.text();

        // 간단한 XML 파싱 (rss-parser 대신 경량 구현)
        const items = [];
        const itemMatches = text.match(/<item>([\s\S]*?)<\/item>/gi) || [];

        for (const itemXml of itemMatches.slice(0, 8)) {
            const getTag = (tag) => {
                const match = itemXml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
                return match ? match[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim() : '';
            };
            items.push({
                title: getTag('title'),
                link: getTag('link'),
                pubDate: getTag('pubDate'),
                description: getTag('description').replace(/<[^>]*>/g, '').slice(0, 500),
            });
        }
        return items;
    } catch {
        return [];
    }
}

// ===== 카테고리별 검색 키워드 =====
const CATEGORY_CONFIG = {
    'kr-stock': {
        queries: ['코스피 시황', '삼성전자 주가', '한국 증시 전망', '외국인 매수'],
    },
    'real-estate': {
        queries: ['부동산 시장 전망', '아파트 청약', '서울 집값 동향'],
    },
    'finance-tips': {
        queries: ['사회초년생 재테크', '연말정산 절세', '청년도약계좌'],
    },
    'us-stock': {
        queries: ['나스닥 마감', '엔비디아 실적', '미국 연준 금리', '테슬라 주가'],
    },
    'crypto': {
        queries: ['비트코인 시세', '이더리움 전망', '가상화폐 ETF'],
    },
};

// ===== 인스타 후킹 스타일 기사 생성 =====
function generateHookingContent(title, description) {
    const cleanTitle = title.replace(/ - .+$/, '').trim();
    const cleanDesc = description.replace(/<[^>]*>/g, '').trim();

    return `
    <p class="text-xl font-black leading-relaxed mb-6 text-gray-900 dark:text-gray-100">
        ${cleanTitle} 🔥
    </p>

    <div class="bg-accent-50 dark:bg-accent-900/20 rounded-2xl p-5 mb-8 border-l-4 border-accent-500">
        <p class="text-lg font-bold text-accent-700 dark:text-accent-300 mb-1">📌 핵심 한 줄</p>
        <p class="text-base text-gray-700 dark:text-gray-300">${cleanDesc.slice(0, 150)}</p>
    </div>

    <h3 class="text-xl font-black mt-8 mb-4 flex items-center gap-2">
        <span class="text-2xl">📊</span> 무슨 일이야?
    </h3>
    <p class="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        ${cleanDesc.slice(0, 300) || cleanTitle}
    </p>

    <h3 class="text-xl font-black mt-8 mb-4 flex items-center gap-2">
        <span class="text-2xl">💡</span> 그래서 어떻게 해?
    </h3>
    <div class="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-5 mb-6 border border-primary-100 dark:border-primary-800">
        <ul class="space-y-3 text-base text-gray-700 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-lg">✅</span> 관련 종목/자산의 최근 흐름을 먼저 체크하세요</li>
            <li class="flex items-start gap-2"><span class="text-lg">✅</span> 추격 매수보다는 눌림목에서 분할 접근이 안전합니다</li>
            <li class="flex items-start gap-2"><span class="text-lg">✅</span> 전문가 의견과 데이터를 교차 확인 후 판단하세요</li>
        </ul>
    </div>

    <div class="bg-gray-100 dark:bg-dark-card rounded-xl p-4 text-xs text-gray-500 dark:text-dark-muted border border-gray-200 dark:border-dark-border mt-8">
        ⚠️ 본 콘텐츠는 투자 참고용이며 매수·매도 권유가 아닙니다. 투자 책임은 본인에게 있습니다.
    </div>
    `;
}

// ===== 불릿 생성 (짧고 임팩트 있게) =====
function generateBullets(title, description, category) {
    const text = description || title;
    const sentences = text.split(/[.!?。]\s*/).filter(s => s.length > 5);

    const defaults = {
        'kr-stock': '분할 매수 접근, 수급 흐름 체크 필수',
        'real-estate': '입지 분석 후 실거주 수요 중심 접근',
        'finance-tips': '소액부터 시작, 꾸준한 적립이 핵심',
        'us-stock': '빅테크 실적 + 연준 정책 교차 확인',
        'crypto': '비중 관리 철저히, 대형코인 중심 접근',
    };

    return [
        { type: 'context', label: '현상', text: (sentences[0] || title).slice(0, 80) },
        { type: 'core', label: '핵심', text: (sentences[1] || description.slice(0, 80)).slice(0, 80) },
        { type: 'action', label: '전략', text: (sentences[2] || defaults[category] || '최신 동향 체크 후 대응').slice(0, 80) },
    ];
}

// ===== 기사 변환 =====
function transformArticle(item, category) {
    const title = (item.title || '').replace(/ - .+$/, '').trim();
    const description = item.description || '';
    const pubDate = item.pubDate || new Date().toISOString();

    // 고유 ID 생성
    const id = Buffer.from(title + pubDate).toString('base64').slice(0, 16).replace(/[^a-zA-Z0-9]/g, 'x');

    return {
        id,
        category,
        title,
        description: description.slice(0, 200),
        bullets: generateBullets(title, description, category),
        link: item.link || '',
        pubDate: new Date(pubDate).toISOString(),
        fetchedAt: new Date().toISOString(),
        image: `https://picsum.photos/seed/${id}/800/600`,
        articleContent: generateHookingContent(title, description),
    };
}

// ===== Google News RSS URL 빌드 =====
function buildGoogleNewsUrl(query) {
    return `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=ko&gl=KR&ceid=KR:ko`;
}

// ===== 카테고리별 뉴스 수집 =====
async function fetchCategoryNews(categoryId) {
    const config = CATEGORY_CONFIG[categoryId];
    if (!config) return [];

    const allArticles = [];
    for (const query of config.queries) {
        const url = buildGoogleNewsUrl(query);
        const items = await parseRSS(url);
        // 다양성을 위해 검색 키워드당 1~2개만 가져옵니다
        const articles = items.slice(0, 2).map(item => transformArticle(item, categoryId));
        allArticles.push(...articles);
    }

    // 중복 제거 (제목 기준)
    const seen = new Set();
    return allArticles.filter(a => {
        if (seen.has(a.title)) return false;
        seen.add(a.title);
        return true;
    }).slice(0, 3); // 핵심: 각 카테고리당 1~3개 (5개 카테고리 x 3개 = 최대 15개)
}

// ===== 메모리 캐시 폴백 =====
let memoryCache = {};

async function getCache() {
    try {
        if (kv) return (await kv.get('news_cache')) || {};
    } catch { }
    return memoryCache;
}

async function setCache(data) {
    try {
        if (kv) await kv.set('news_cache', data, { ex: 86400 });
    } catch { }
    memoryCache = data;
}

// ===== 메인 핸들러 =====
export default async function handler(req, res) {
    // Vercel Cron 인증 (선택적)
    // if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    //     return res.status(401).json({ error: 'Unauthorized' });
    // }

    res.setHeader('Access-Control-Allow-Origin', '*');

    try {
        console.log('[크론] 뉴스 자동 수집 시작...');

        const categories = Object.keys(CATEGORY_CONFIG);
        const cache = await getCache();

        for (const cat of categories) {
            try {
                const articles = await fetchCategoryNews(cat);
                if (articles.length > 0) {
                    // 기존 캐시와 병합 (새 기사 우선)
                    const existing = cache[cat] || [];
                    const existingTitles = new Set(existing.map(a => a.title));
                    const newArticles = articles.filter(a => !existingTitles.has(a.title));
                    cache[cat] = [...newArticles, ...existing].slice(0, 30);
                }
                // 카테고리 간 딜레이
                await new Promise(r => setTimeout(r, 1000));
            } catch (err) {
                console.error(`[크론] ${cat} 수집 실패:`, err.message);
            }
        }

        cache._lastUpdate = new Date().toISOString();
        await setCache(cache);

        // 총 기사 수 계산
        let totalCount = 0;
        for (const [key, val] of Object.entries(cache)) {
            if (key !== '_lastUpdate' && Array.isArray(val)) totalCount += val.length;
        }

        console.log(`[크론] 뉴스 수집 완료! 총 ${totalCount}개`);

        return res.status(200).json({
            success: true,
            message: `뉴스 수집 완료: ${totalCount}개`,
            lastUpdate: cache._lastUpdate,
        });
    } catch (err) {
        console.error('[크론] 에러:', err);
        return res.status(500).json({ success: false, error: err.message });
    }
}
