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

export const financeTipsData = [
    a('ft1', 'finance-tips', '월급 200만원으로 1억 모으는 현실 플랜 💰', null,
        '사회초년생 평균 실수령 200만원 시대',
        '50-30-20 법칙 + 청년도약계좌 콤보',
        '자동이체 시스템 만들어서 강제 저축',
        `<p class="text-xl font-black mb-6">월급 200으로 1억? 현실적으로 가능함 💰</p>
        <div class="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-5 mb-8 border-l-4 border-amber-500">
            <p class="text-lg font-bold text-amber-700 dark:text-amber-300">📌 핵심 공식</p>
            <p class="text-base">수입의 50% 생활비 · 30% 저축 · 20% 투자</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">📊 현실 플랜</h3>
        <p class="mb-6 text-lg leading-relaxed">매달 60만원 적금 + 청년도약계좌(정부 매칭) + 나머지 40만원 ETF 적립. 3년이면 시드머니 3천만원. 이걸 굴리면 5년 차에 1억 가능.</p>
        <h3 class="text-xl font-black mt-8 mb-4">💡 지금 당장 할 것</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 월급날 자동이체 설정 (생각하면 안 함)</li>
                <li>✅ 청년도약계좌 가입 (정부가 돈 줌)</li>
                <li>✅ 커피값·배달비 한 달 기록해보기</li>
            </ul>
        </div>`),
    a('ft2', 'finance-tips', '연말정산 환급 100만원 더 받는 법 🧾', null,
        '직장인 평균 환급액 대비 100만원 더 받을 수 있음',
        '연금저축·IRP·월세 공제 3종 세트 활용',
        '12월 전에 세액공제 한도 채우기',
        `<p class="text-xl font-black mb-6">연말정산으로 100만원 더 받는 꿀팁 🧾</p>
        <div class="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-5 mb-8 border-l-4 border-amber-500">
            <p class="text-lg font-bold">📌 3종 세트</p>
            <p class="text-base">연금저축 400만 + IRP 300만 + 월세공제 = <strong>최대 115.5만원 환급</strong></p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 체크리스트</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 연금저축 연 400만원 채우기 (세액공제 66만)</li>
                <li>✅ IRP 추가 300만원 (세액공제 49.5만)</li>
                <li>✅ 월세 살면 월세 세액공제 신청 필수</li>
            </ul>
        </div>`),
    a('ft3', 'finance-tips', '2030 ETF 투자 입문 📈 이것만 사면 됨', null,
        '개별주 대신 ETF로 시작하는 게 안전',
        'S&P500 + 코스피200 ETF 두 개면 충분',
        '매달 적립식 투자, 최소 3년 홀딩',
        `<p class="text-xl font-black mb-6">주식 뭐 사야 돼? ETF 이것만 사 📈</p>
        <div class="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-5 mb-8 border-l-4 border-amber-500">
            <p class="text-lg font-bold">📌 결론</p>
            <p class="text-base"><strong>S&P500 ETF + 코스피200 ETF</strong> 두 개면 충분</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 초보자 가이드</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 매달 같은 날 같은 금액 적립 (DCA)</li>
                <li>✅ 최소 3년은 안 팔 각오로</li>
                <li>⚠️ 레버리지·인버스 ETF는 초보자 금지</li>
            </ul>
        </div>`),
    a('ft4', 'finance-tips', '신용점수 900점 만드는 비결 📊', null,
        '신용점수가 대출 금리·한도를 결정함',
        '체크카드 30만원 이상 사용 + 통신비 자동이체',
        '현금서비스·카드론 절대 금지',
        `<p class="text-xl font-black mb-6">신용점수 900점, 이렇게 만들어 📊</p>
        <div class="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-5 mb-8 border-l-4 border-amber-500">
            <p class="text-lg font-bold">📌 핵심</p>
            <p class="text-base">신용점수 = <strong>대출 금리</strong>를 결정하는 당신의 성적표</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 올리는 법</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 체크카드 월 30만원 이상 꾸준히 사용</li>
                <li>✅ 통신비·공과금 자동이체 (실적 잡힘)</li>
                <li>❌ 현금서비스·카드론 = 신용점수 폭탄</li>
            </ul>
        </div>`),
    a('ft5', 'finance-tips', '비상금 얼마 모아야 돼? 🏦 황금 비율', null,
        '비상금 없이 투자하면 급전 필요 시 손절',
        '월 생활비 × 3~6개월이 최적 비상금',
        '파킹통장 or CMA에 묶어두기',
        `<p class="text-xl font-black mb-6">비상금 없이 투자? 그건 도박이야 🏦</p>
        <div class="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-5 mb-8 border-l-4 border-amber-500">
            <p class="text-lg font-bold">📌 황금 비율</p>
            <p class="text-base">비상금 = 월 생활비 × <strong>3~6개월</strong></p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 어디에 넣어?</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 파킹통장 (토스뱅크 3.5%, 카카오뱅크 3.0%)</li>
                <li>✅ CMA 계좌 (증권사, 수시입출금 + 이자)</li>
                <li>❌ 적금에 넣으면 급할 때 깨야 함 — 비추</li>
            </ul>
        </div>`),
    a('ft6', 'finance-tips', '보험 이거 다 필요 없음 🛡️ 꼭 필요한 3개만', null,
        '불필요한 보험에 월 20만원 이상 내는 사람 많음',
        '실손보험 + 암보험 + 운전자보험 3개면 충분',
        '보험 리모델링으로 월 10만원 절약',
        `<p class="text-xl font-black mb-6">보험 다 필요 없어. 이 3개만 있으면 됨 🛡️</p>
        <div class="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-5 mb-8 border-l-4 border-amber-500">
            <p class="text-lg font-bold">📌 필수 3개</p>
            <p class="text-base"><strong>실손</strong> + <strong>암보험</strong> + <strong>운전자보험</strong></p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 체크</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 저축성 보험 → 해지하고 ETF에 넣는 게 이득</li>
                <li>✅ 보험 리모델링만으로 월 10만원 절약 가능</li>
                <li>❌ 변액보험·종신보험 = 돈 묶이기만 함</li>
            </ul>
        </div>`),
    a('ft7', 'finance-tips', '부업으로 월 50만원 만드는 현실적 방법 💻', null,
        '본업 외 부수입이 재테크의 게임 체인저',
        '블로그·유튜브·스마트스토어 3대 부업',
        '하루 1시간 투자로 6개월 후 월 50만원 목표',
        `<p class="text-xl font-black mb-6">부업으로 월 50 벌기, 현실적으로 가능? 💻</p>
        <div class="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-5 mb-8 border-l-4 border-amber-500">
            <p class="text-lg font-bold">📌 현실적 부업 3대장</p>
            <p class="text-base"><strong>블로그</strong> · <strong>유튜브</strong> · <strong>스마트스토어</strong></p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 로드맵</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 1~2개월: 하루 1시간 콘텐츠 생산</li>
                <li>✅ 3~4개월: 애드센스·쿠팡파트너스 수익 시작</li>
                <li>✅ 6개월~: 월 50만원 안정적 수익 달성</li>
            </ul>
        </div>`),
];
