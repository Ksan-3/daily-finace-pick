function a(id, cat, title, img, b1, b2, b3, content, date) {
    const uniqueImg = `https://picsum.photos/seed/${id}/800/600`;
    return {
        id, category: cat, title, image: uniqueImg, bullets: [
            { type: 'context', label: '현상', text: b1 },
            { type: 'core', label: '핵심', text: b2 },
            { type: 'action', label: '전략', text: b3 },
        ], pubDate: date || '2026-02-26T09:00:00+09:00', articleContent: content
    };
}

export const krStockData = [
    a('kr1', 'kr-stock', '코스피 6,200 돌파 🚀 역사적 신고가 행진!', null,
        '코스피 사상 최고치 6,200 돌파, 장중 6,300까지',
        '엔비디아 발 반도체 랠리 + 외국인 매수세 폭발',
        '반도체·증권주 중심 수급 따라가기',
        `<p class="text-xl font-black mb-6">코스피가 역사를 쓰고 있다 🚀 6,200 돌파!</p>
        <div class="bg-red-50 dark:bg-red-900/20 rounded-2xl p-5 mb-8 border-l-4 border-red-500">
            <p class="text-lg font-bold text-red-700 dark:text-red-300">📌 오늘 시황</p>
            <p class="text-2xl font-black">코스피 6,200 돌파 · 장중 6,300 터치</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">📊 왜 이렇게 올라?</h3>
        <p class="mb-4 text-lg leading-relaxed">어제 엔비디아 실적이 역대급으로 터지면서 → 글로벌 AI·반도체 랠리 → 삼성전자·SK하이닉스 동반 폭등 → 코스피 사상 최고치 경신.</p>
        <p class="mb-6 text-lg leading-relaxed">추가 상승 요인: 1월 한국 수출 +33.9%(반도체가 30% 비중) + 투자자 예탁금 108조 대기 + WGBI 편입 기대감으로 외국인 자금 유입.</p>
        <h3 class="text-xl font-black mt-8 mb-4">💡 지금 뭐 해?</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 반도체(삼전·하이닉스) + 증권주 수급 좋음</li>
                <li>✅ KOSPI ETF 분할 매수로 시장 전체 동참</li>
                <li>⚠️ 쏠림 주의 — 분산 투자 필수</li>
            </ul>
        </div>`,
        '2026-02-26T09:00:00+09:00'),

    a('kr2', 'kr-stock', 'SK하이닉스·삼성전자 엔비디아 수혜 폭등 📈', null,
        '엔비디아 실적 호조 → HBM 수혜주 동반 랠리',
        '한미반도체 1년 최고가 경신, AI 반도체 대장주 질주',
        'AI 반도체 소재·장비주도 함께 주목',
        `<p class="text-xl font-black mb-6">엔비디아가 터지면 한국도 터진다 📈</p>
        <div class="bg-red-50 dark:bg-red-900/20 rounded-2xl p-5 mb-8 border-l-4 border-red-500">
            <p class="text-lg font-bold">📌 수혜주</p>
            <p class="text-base">한미반도체 <strong>1년 최고가</strong> · SK하이닉스·삼전 동반 급등</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 전략</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ SK하이닉스 — HBM4 양산, NVDA 납품 독점</li>
                <li>✅ 한미반도체 — 반도체 장비 핵심, 수주 폭증</li>
                <li>✅ 소재·장비주까지 낙수효과 확인</li>
            </ul>
        </div>`,
        '2026-02-26T09:00:00+09:00'),

    a('kr3', 'kr-stock', '증권주 52주 신고가 🏦 거래대금 폭발', null,
        '코스피 거래대금 급증 → 증권주 손익 직결',
        '상상인증권·SK증권 52주 신고가, 증권 섹터 전체 강세',
        '증권주 단기 모멘텀 트레이딩 유효',
        `<p class="text-xl font-black mb-6">증시 활황 = 증권주 대박 🏦</p>
        <div class="bg-red-50 dark:bg-red-900/20 rounded-2xl p-5 mb-8 border-l-4 border-red-500">
            <p class="text-lg font-bold">📌 핵심</p>
            <p class="text-base">거래대금 ↑ → 수수료 수입 ↑ → 증권주 52주 신고가</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 전략</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 시장 활황기 = 증권주 호실적 구간</li>
                <li>✅ 단기 스윙 트레이딩 유효</li>
                <li>⚠️ 시장 조정 시 빠질 수도 — 스탑로스 철저히</li>
            </ul>
        </div>`,
        '2026-02-26T09:00:00+09:00'),

    a('kr4', 'kr-stock', 'LG전자 자사주 소각 + 피지컬AI 🤖 급등', null,
        'LG전자 자사주 소각 발표 + 피지컬 AI(로봇) 진출',
        '상법 개정안 통과 → 자사주 소각 의무화 기대',
        '밸류업 수혜 대형주 편입 검토',
        `<p class="text-xl font-black mb-6">LG전자 자사주 소각 + AI 로봇?! 🤖</p>
        <div class="bg-red-50 dark:bg-red-900/20 rounded-2xl p-5 mb-8 border-l-4 border-red-500">
            <p class="text-lg font-bold">📌 이중 호재</p>
            <p class="text-base">자사주 소각(밸류업) + 피지컬 AI <strong>로봇 산업 진출</strong></p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 포인트</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 밸류업 프로그램 + 상법 개정 → 주주환원 기대</li>
                <li>✅ AI 로봇 내러티브 → 중장기 성장 모멘텀</li>
            </ul>
        </div>`,
        '2026-02-26T09:00:00+09:00'),

    a('kr5', 'kr-stock', '외국인 매수 폭발 💰 예탁금 108조 대기', null,
        '투자자 예탁금 108조 사상 최대 + 외국인 연속 순매수',
        'WGBI 편입 기대감 → 외국인 자금 유입 가속',
        '외국인 선호주 + KOSPI대형 ETF 편입 전략',
        `<p class="text-xl font-black mb-6">108조가 증시에 들어올 준비를 하고 있다 💰</p>
        <div class="bg-red-50 dark:bg-red-900/20 rounded-2xl p-5 mb-8 border-l-4 border-red-500">
            <p class="text-lg font-bold">📌 대기 자금</p>
            <p class="text-2xl font-black">예탁금 108조 · 부동산→증시 머니무브</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 전략</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 대기 자금 유입 → 추가 상승 여력 존재</li>
                <li>✅ 외국인 매수 상위 종목 추적</li>
            </ul>
        </div>`,
        '2026-02-26T09:00:00+09:00'),

    a('kr6', 'kr-stock', '상법 개정안 통과 ⚡ 자사주 소각 의무화', null,
        '상법 개정안 국회 통과 — 자사주 소각 의무화 포함',
        '코리아 디스카운트 해소 기대감 최고조',
        '밸류업 수혜주(금융, 지주사) 비중 확대',
        `<p class="text-xl font-black mb-6">상법 개정 통과! 자사주 소각 의무화 ⚡</p>
        <div class="bg-red-50 dark:bg-red-900/20 rounded-2xl p-5 mb-8 border-l-4 border-red-500">
            <p class="text-lg font-bold">📌 의미</p>
            <p class="text-base">코리아 디스카운트 해소 → <strong>PBR 리레이팅</strong></p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 전략</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 금융·지주사 등 저PBR 종목 재평가</li>
                <li>✅ 배당 + 자사주 소각 이중 수익</li>
            </ul>
        </div>`,
        '2026-02-26T09:00:00+09:00'),

    a('kr7', 'kr-stock', '⚠️ 공매도 잔고 사상 최대 — 과열 신호?', null,
        '코스피 공매도 잔고 사상 최대 수준 확대',
        '급등 구간에서 숏 포지션 → 변동성 확대 주의',
        '과열 구간에서는 현금 비중 20% 유지',
        `<p class="text-xl font-black mb-6">주의! 공매도 잔고 사상 최대 ⚠️</p>
        <div class="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-5 mb-8 border-l-4 border-yellow-500">
            <p class="text-lg font-bold text-yellow-700 dark:text-yellow-300">⚠️ 경고 신호</p>
            <p class="text-base">코스피 급등 속 공매도 잔고 <strong>사상 최대</strong></p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 대응</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>⚠️ 쏠림 현상 + 공매도 = 단기 변동성 ↑</li>
                <li>✅ 현금 비중 최소 20% 확보</li>
                <li>✅ 레버리지 ETF 사용 자제</li>
            </ul>
        </div>`,
        '2026-02-26T09:00:00+09:00'),
];
