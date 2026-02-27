import { kv } from '@vercel/kv';

// Vercel KV가 없으면 메모리 캐시 폴백
let memoryCache = {};

async function getCache() {
    try {
        if (kv) {
            const data = await kv.get('news_cache');
            return data || {};
        }
    } catch { }
    return memoryCache;
}

async function setCache(data) {
    try {
        if (kv) {
            await kv.set('news_cache', data, { ex: 86400 }); // 24시간 TTL
        }
    } catch { }
    memoryCache = data;
}

export default async function handler(req, res) {
    // CORS 허용
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'GET만 허용됩니다' });
    }

    try {
        const cache = await getCache();
        const allArticles = [];

        for (const articles of Object.values(cache)) {
            if (Array.isArray(articles)) {
                allArticles.push(...articles);
            }
        }

        // 최신순 정렬
        allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

        return res.status(200).json({
            success: true,
            data: allArticles,
            lastUpdate: cache._lastUpdate || null,
            count: allArticles.length,
        });
    } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
}
