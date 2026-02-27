function a(id, cat, title, img, b1, b2, b3, content) {
    const uniqueImg = `https://picsum.photos/seed/${id}/800/600`;
    return {
        id, category: cat, title, image: uniqueImg, bullets: [
            { type: 'context', label: '현상', text: b1 },
            { type: 'core', label: '핵심', text: b2 },
            { type: 'action', label: '전략', text: b3 },
        ], pubDate: new Date().toISOString(), articleContent: content
    };
}

export const cryptoData = [
    a('cr1', 'crypto', '비트코인 $68K 돌파 🚀 숏 포지션 $4억 청산!', null,
        'BTC $68,342 — 24시간 +6.83%, 국내 9,940만원',
        '숏 포지션 $4억 청산, 서클 USDC 실적 호조 배경',
        '추격 매수 금지, 조정 시 분할 매수 전략',
        `<p class="text-xl font-black mb-6">비트코인 $68K 돌파! 숏 $4억 청산 🚀</p>
        <div class="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-5 mb-8 border-l-4 border-orange-500">
            <p class="text-lg font-bold text-orange-700 dark:text-orange-300">📌 오늘 시세 (2/26)</p>
            <p class="text-2xl font-black">BTC $68,342(+6.83%) · 국내 9,940만원</p>
            <p class="text-base mt-1">장중 최고 <strong>1억 482만원</strong> 터치!</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">📊 왜 올랐어?</h3>
        <p class="mb-4 text-lg leading-relaxed">서클(USDC 발행사) 실적 호조 + 24시간 내 숏 포지션 $4억 이상 청산이 주요 원인. 비트코인만 $2억 규모 숏이 날아감.</p>
        <p class="mb-6 text-lg leading-relaxed">근데 아이러니하게 시장 심리지수는 '극도의 공포(Extreme Fear)'. 즉, 아직 사람들이 돈을 안 넣었다는 뜻 → 추가 상승 여력 존재.</p>
        <h3 class="text-xl font-black mt-8 mb-4">💡 전략</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 지지선: $64,740 · $61,547 · $59,170</li>
                <li>✅ 저항선: $70,310 · $72,687 · $75,880</li>
                <li>⚠️ $70K 위에서 FOMO 매수 금지 → 조정 시 분할</li>
            </ul>
        </div>`,),
    a('cr2', 'crypto', '이더리움 L2 생태계 폭발 ⚡ TVL 사상 최대', null,
        '이더리움 L2 TVL $50B 돌파, 전분기 대비 +80%',
        'Arbitrum·Base·Optimism 3강 체제 형성',
        'ETH $3,000 이하 분할 매수, L2 토큰 관심',
        `<p class="text-xl font-black mb-6">이더리움 L2가 터지고 있다 ⚡</p>
        <div class="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-5 mb-8 border-l-4 border-orange-500">
            <p class="text-lg font-bold">📌 TVL(총예치금액)</p>
            <p class="text-2xl font-black">L2 전체 $50B 돌파 · 전분기 대비 +80%</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 포인트</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ ETH $3,000 이하에서 분할 매수</li>
                <li>✅ ARB, OP, BASE 등 L2 토큰 주목</li>
            </ul>
        </div>`),
    a('cr3', 'crypto', '리플 SEC 소송 종결 ⚖️ XRP 30% 급등', null,
        'SEC vs 리플 소송 3년 만에 최종 합의',
        'XRP 30% 급등, 시총 5위 복귀',
        '규제 리스크 해소 후 XRP 추가 상승 여력',
        `<p class="text-xl font-black mb-6">리플 소송 끝났다 ⚖️ XRP 폭등!</p>
        <div class="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-5 mb-8 border-l-4 border-orange-500">
            <p class="text-lg font-bold">📌 핵심</p>
            <p class="text-base">3년간의 SEC 소송 종결 → XRP <strong>30% 급등</strong></p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 전략</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 규제 불확실성 해소 → 기관 투자 유입 기대</li>
                <li>⚠️ 급등 후 조정 가능 — 추격 매수 주의</li>
            </ul>
        </div>`),
    a('cr4', 'crypto', '솔라나 밈코인 시즌 🎭 SOL 생태계 활황', null,
        'SOL 기반 밈코인 거래량 $5B 돌파',
        '솔라나 DEX 거래량 이더리움 추월',
        'SOL 장기 홀딩 + 밈코인은 소액만',
        `<p class="text-xl font-black mb-6">솔라나가 이더리움을 추월했다 🎭</p>
        <div class="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-5 mb-8 border-l-4 border-orange-500">
            <p class="text-lg font-bold">📌 핵심</p>
            <p class="text-base">SOL DEX 거래량 <strong>ETH 추월</strong> · 밈코인 거래량 $5B</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 전략</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ SOL은 장기 홀딩 관점에서 매력적</li>
                <li>⚠️ 밈코인은 <strong>소액 재미</strong>로만 — 올인 절대 금지</li>
            </ul>
        </div>`),
    a('cr5', 'crypto', 'BTC 반감기 D-60 ⏰ 과거 패턴은?', null,
        '비트코인 반감기 60일 앞, 역사적 패턴 분석',
        '과거 3번 모두 반감기 후 12개월 내 +300% 이상',
        '반감기 전 매집 → 1년 홀딩 전략',
        `<p class="text-xl font-black mb-6">비트코인 반감기 60일 남았다 ⏰</p>
        <div class="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-5 mb-8 border-l-4 border-orange-500">
            <p class="text-lg font-bold">📌 역사적 데이터</p>
            <p class="text-base">과거 3번 반감기 후 12개월 → <strong>평균 +300%</strong> 상승</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 전략</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 반감기 전 분할 매집</li>
                <li>✅ 최소 12개월 홀딩 관점</li>
                <li>⚠️ "이번엔 다르다"는 말에 현혹되지 말 것</li>
            </ul>
        </div>`),
    a('cr6', 'crypto', '국내 코인 과세 유예 📰 2027년으로 연기', null,
        '가상자산 과세 2027년으로 2년 추가 유예 확정',
        '투자자 세금 부담 감소 → 거래량 증가 기대',
        '과세 전까지 수익 실현 전략 재점검',
        `<p class="text-xl font-black mb-6">코인 세금 2027년으로 또 미뤄졌다 📰</p>
        <div class="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-5 mb-8 border-l-4 border-orange-500">
            <p class="text-lg font-bold">📌 핵심</p>
            <p class="text-base">가상자산 과세 <strong>2027년으로 유예</strong> 확정</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 전략</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 2027년까지 세금 없이 수익 실현 가능</li>
                <li>✅ 거래량 증가 → 시장 활성화 기대</li>
            </ul>
        </div>`),
    a('cr7', 'crypto', '블랙록 BTC ETF 순자산 $50B 돌파 🏦', null,
        '블랙록 IBIT ETF 순자산 $50B 돌파, 역대 최고 기록',
        '출시 1년 만에 금 ETF 기록 상회',
        '기관화 가속 → BTC 장기 강세 전망',
        `<p class="text-xl font-black mb-6">블랙록 비트코인 ETF $50B 돌파 🏦</p>
        <div class="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-5 mb-8 border-l-4 border-orange-500">
            <p class="text-lg font-bold">📌 핵심</p>
            <p class="text-base">IBIT ETF 순자산 <strong>$50B</strong> · 금 ETF 기록 <strong>상회</strong></p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 의미</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 기관 자금 유입 = BTC 장기 강세 기반</li>
                <li>✅ "디지털 금" 내러티브 현실화 중</li>
            </ul>
        </div>`),
];
