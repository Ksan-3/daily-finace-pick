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

export const usStockData = [
    a('us1', 'us-stock',
        'NVIDIA 매출 $68.1B 폭발 🔥 역대 최고 분기 실적',
        null,
        '2/25 발표: FY2026 Q4 매출 $68.1B, 전년비 +73%',
        '데이터센터 $62.3B(+75%), 다음 분기 가이던스 $78B',
        'AI 반도체 수혜주 분할 매수, NVDA·AVGO·TSM 주목',
        `<p class="text-xl font-black mb-6">엔비디아가 어제(2/25) 실적을 터뜨렸다 🔥🔥🔥</p>
        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-5 mb-8 border-l-4 border-blue-500">
            <p class="text-lg font-bold text-blue-700 dark:text-blue-300">📌 실적 핵심 숫자</p>
            <p class="text-2xl font-black">매출 $68.1B(+73%) · 데이터센터 $62.3B(+75%)</p>
            <p class="text-base mt-2">다음 분기 가이던스: <strong>$78B</strong> (±2%)</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">📊 무슨 일이야?</h3>
        <p class="mb-4 text-lg leading-relaxed">어제(2월 25일) 발표된 엔비디아 FY2026 4분기 실적이 역대 최고를 갈아치웠음. 매출 $68.1B으로 전년비 73% 폭증. 특히 데이터센터 매출이 $62.3B로 전체의 91%를 차지.</p>
        <p class="mb-6 text-lg leading-relaxed">젠슨 황 CEO: "에이전트 AI의 변곡점에 도달했다." 다음 분기 매출 가이던스 $78B 제시 → 시장 예상($75B)을 상회.</p>
        <h3 class="text-xl font-black mt-8 mb-4">💡 지금 어떻게 해?</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ <strong>NVDA</strong> — 실적 서프라이즈 확인, 눌림목 분할 매수</li>
                <li>✅ <strong>AVGO·TSM</strong> — AI 반도체 수혜 함께 주목</li>
                <li>⚠️ 시간외 변동성 주의 — 추격 매수보다 분할 접근</li>
            </ul>
        </div>`,
        '2026-02-26T09:00:00+09:00'),

    a('us2', 'us-stock',
        '엔비디아 연간 매출 $215.9B 🚀 전년비 65% 성장',
        null,
        'FY2026 전체 매출 $215.9B, 역대 최고 연간 실적',
        'AI 컴퓨팅 수요 기하급수적 증가 — 젠슨 황',
        'AI 투자 사이클 지속 확인, 장기 홀딩 전략',
        `<p class="text-xl font-black mb-6">엔비디아 연매출 $216B 💰 미국 GDP 끌어올리는 수준</p>
        <div class="bg-accent-50 dark:bg-accent-900/20 rounded-2xl p-5 mb-8 border-l-4 border-accent-500">
            <p class="text-lg font-bold text-accent-700 dark:text-accent-300">📌 연간 실적</p>
            <p class="text-2xl font-black">FY2026 매출 $215.9B · 전년비 +65%</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">📊 의미</h3>
        <p class="mb-6 text-lg leading-relaxed">1년 만에 매출 65% 성장. 이건 웬만한 국가의 GDP 성장률보다 빠름. AI 반도체 시장을 엔비디아가 독점 중이라는 뜻.</p>
        <h3 class="text-xl font-black mt-8 mb-4">💡 투자 포인트</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ AI 투자 사이클 최소 2028년까지 지속 전망</li>
                <li>✅ 단기 변동성 무시, 장기 홀딩이 답</li>
            </ul>
        </div>`,
        '2026-02-26T09:00:00+09:00'),

    a('us3', 'us-stock',
        '나스닥 사상 최고 임박 📈 엔비디아 효과 확산',
        null,
        '엔비디아 실적 발표 후 AI 관련주 동반 랠리',
        '나스닥 사상 최고치 재도전, 매그니피센트7 전반 상승',
        'AI·반도체 ETF(SOXX, SMH) 분할 매수',
        `<p class="text-xl font-black mb-6">엔비디아 발 나스닥 랠리 📈</p>
        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-5 mb-8 border-l-4 border-blue-500">
            <p class="text-lg font-bold">📌 핵심</p>
            <p class="text-base">엔비디아 호실적 → AI 관련주 전체 동반 상승</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 전략</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ AI·반도체 ETF(SOXX, SMH) 분할 매수</li>
                <li>✅ 개별주보다 ETF가 리스크 분산에 유리</li>
                <li>⚠️ 고점 추격 매수 금지 → 조정 시 진입</li>
            </ul>
        </div>`,
        '2026-02-26T09:00:00+09:00'),

    a('us4', 'us-stock',
        '테슬라 로보택시 텍사스 시범 운영 시작 🚗',
        null,
        '테슬라 로보택시 텍사스에서 첫 시범 서비스',
        'FSD V13 탑재, 2026년 내 10개 도시 확대 계획',
        'TSLA 모빌리티 플랫폼 재평가, 중장기 관점 매수',
        `<p class="text-xl font-black mb-6">테슬라가 진짜 로보택시 시작했다 🚗💨</p>
        <div class="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-5 mb-8 border-l-4 border-purple-500">
            <p class="text-lg font-bold text-purple-700 dark:text-purple-300">📌 핵심</p>
            <p class="text-base">텍사스 시범 운행 시작 · 연내 <strong>10개 도시</strong> 확대</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 투자 포인트</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 로보택시 성공 → 자동차 → 모빌리티 플랫폼 전환</li>
                <li>⚠️ 규제 리스크 존재 — 분할 매수 필수</li>
            </ul>
        </div>`,
        '2026-02-26T09:00:00+09:00'),

    a('us5', 'us-stock',
        'MS Azure AI 매출 +60% 💎 클라우드 1위 탈환',
        null,
        'Azure AI 서비스 매출 전분기 대비 60% 급증',
        'OpenAI 파트너십 효과 본격화, 클라우드 1위',
        'MSFT $420 이하 분할 매수',
        `<p class="text-xl font-black mb-6">MS가 AWS 잡았다 💎 클라우드 왕좌 교체</p>
        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-5 mb-8 border-l-4 border-blue-500">
            <p class="text-lg font-bold">📌 핵심</p>
            <p class="text-base">Azure AI +60% → 클라우드 점유율 <strong>1위</strong></p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 전략</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ MSFT $420 이하에서 분할 매수</li>
                <li>✅ AI 클라우드 장기 성장 베팅</li>
            </ul>
        </div>`,
        '2026-02-26T09:00:00+09:00'),

    a('us6', 'us-stock',
        'FY2027 Q1 가이던스 $78B 💪 시장 예상 상회',
        null,
        '엔비디아 다음 분기 예상 매출 $78B±2% 제시',
        '월가 컨센서스($75B) 상회, AI 수요 가속 확인',
        '실적 모멘텀 지속, AI 반도체 비중 확대',
        `<p class="text-xl font-black mb-6">다음 분기 $78B? 엔비디아 미쳤다 💪</p>
        <div class="bg-green-50 dark:bg-green-900/20 rounded-2xl p-5 mb-8 border-l-4 border-green-500">
            <p class="text-lg font-bold text-green-700 dark:text-green-300">📌 가이던스</p>
            <p class="text-2xl font-black">FY2027 Q1: $78B (±2%) · 컨센 $75B 상회</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 의미</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ AI 수요 둔화 우려 → <strong>완전 해소</strong></li>
                <li>✅ 다음 분기도 서프라이즈 가능성 높음</li>
                <li>✅ AI 반도체 포트폴리오 비중 유지/확대</li>
            </ul>
        </div>`,
        '2026-02-26T09:00:00+09:00'),

    a('us7', 'us-stock',
        '메타 AI 광고 매출 +22% 🚀 릴스 $5B 돌파',
        null,
        'AI 기반 광고 타겟팅 → 매출 +22% 성장',
        '릴스 광고 수익 분기 $5B 첫 돌파',
        'META AI 광고 독점 지속, 장기 홀딩',
        `<p class="text-xl font-black mb-6">메타 AI 광고가 돈을 쓸어담고 있다 🚀</p>
        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-5 mb-8 border-l-4 border-blue-500">
            <p class="text-lg font-bold">📌 핵심</p>
            <p class="text-base">AI 광고 매출 <strong>+22%</strong> · 릴스 <strong>$5B</strong> 돌파</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 포인트</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 디지털 광고 AI 독점 → 장기 성장</li>
                <li>✅ META $500 이하에서 매수</li>
            </ul>
        </div>`,
        '2026-02-26T09:00:00+09:00'),
];
