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

export const realEstateData = [
    a('re1', 'real-estate', '서울 강남 3구 신고가 행진 🏢 토허제 해제 효과', null,
        '토지거래허가 해제 후 강남·서초·송파 매수 폭증',
        '강남 아파트 평균 +2.3% 상승, 거래량 40% 급증',
        '실수요자 대출 규제 완화 전 매수 타이밍 체크',
        `<p class="text-xl font-black mb-6">강남 집값이 다시 날뛴다 🏢🔥</p>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-8 border-l-4 border-emerald-500">
            <p class="text-lg font-bold text-emerald-700 dark:text-emerald-300">📌 핵심</p>
            <p class="text-base">토허제 해제 → 강남3구 거래량 <strong>40% 급증</strong>, 평균 +2.3%</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">📊 상황</h3>
        <p class="mb-6 text-lg leading-relaxed">토지거래허가제가 해제되자마자 강남·서초·송파에서 매수 문의가 폭증. 대기 수요가 한꺼번에 터져나오는 중.</p>
        <h3 class="text-xl font-black mt-8 mb-4">💡 어떻게 해?</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 실수요자라면 대출 규제 완화 전 매수 검토</li>
                <li>⚠️ 투자 목적이면 추격 매수보다 조정 대기</li>
            </ul>
        </div>`),
    a('re2', 'real-estate', '전세사기 방지법 시행 ⚖️ 임차인 보호 강화', null,
        '전세사기 방지 특별법 시행, 임차인 보호 대폭 강화',
        '전세보증보험 의무화, 깡통전세 집중 모니터링',
        '전세 계약 전 등기부등본·보증보험 필수 확인',
        `<p class="text-xl font-black mb-6">전세사기 방지법 드디어 시행 ⚖️</p>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-8 border-l-4 border-emerald-500">
            <p class="text-lg font-bold">📌 바뀐 점</p>
            <p class="text-base">전세보증보험 <strong>의무화</strong> · 깡통전세 집중 모니터링</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 체크리스트</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 등기부등본 확인 (근저당 체크)</li>
                <li>✅ 전세보증보험 가입 필수</li>
                <li>✅ 전세가율 80% 이상이면 위험 신호</li>
            </ul>
        </div>`),
    a('re3', 'real-estate', '수도권 GTX-A 개통 🚆 수혜 지역 급등', null,
        'GTX-A 노선 개통 → 수혜 역세권 아파트값 급등',
        '파주 운정·동탄 역세권 강남 30분 시대 개막',
        '2차 수혜지역(GTX-B·C) 선점 투자 검토',
        `<p class="text-xl font-black mb-6">GTX-A 개통! 수혜 지역 어디? 🚆</p>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-8 border-l-4 border-emerald-500">
            <p class="text-lg font-bold">📌 핵심</p>
            <p class="text-base">운정·동탄 → 강남 <strong>30분</strong> · 역세권 급등</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 전략</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ GTX-A 수혜지역은 이미 반영 중</li>
                <li>✅ <strong>GTX-B·C 노선</strong> 수혜 지역 미리 선점</li>
            </ul>
        </div>`),
    a('re4', 'real-estate', '청약 당첨률 역대 최저 😱 1순위 경쟁 100:1', null,
        '서울 인기 단지 1순위 경쟁률 100:1 돌파',
        '청약 가점제 만점 84점도 탈락 사례 속출',
        '무주택 기간·부양가족수 점수 관리 필수',
        `<p class="text-xl font-black mb-6">청약 당첨이 로또보다 어렵다 😱</p>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-8 border-l-4 border-emerald-500">
            <p class="text-lg font-bold">📌 현실</p>
            <p class="text-base">경쟁률 <strong>100:1</strong> · 가점 84점도 <strong>탈락</strong></p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 전략</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 청약통장 가입 기간 최대한 늘리기</li>
                <li>✅ 비인기 지역 청약으로 내집마련 현실화</li>
                <li>✅ 특별공급(신혼·생초) 자격 미리 확인</li>
            </ul>
        </div>`),
    a('re5', 'real-estate', '역전세 위기 진정 📊 전세가 반등 시작', null,
        '전세가 3개월 연속 반등, 역전세 위기 진정',
        '서울 전세가율 62% 회복, 보증금 반환 리스크 감소',
        '전세 매물 줄고 수요 증가, 적정 전세가 점검',
        `<p class="text-xl font-black mb-6">역전세 위기 끝났나? 전세가 반등 📊</p>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-8 border-l-4 border-emerald-500">
            <p class="text-lg font-bold">📌 데이터</p>
            <p class="text-base">전세가 <strong>3개월 연속 반등</strong> · 전세가율 62% 회복</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 체크</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 전세가율 60~70% 구간이 안전 범위</li>
                <li>✅ 역전세 매물은 협상 여지 있음 — 기회일 수도</li>
            </ul>
        </div>`),
    a('re6', 'real-estate', '재건축 초과이익환수제 완화 🏗️ 강남 찬스?', null,
        '재건축 초과이익환수 부담금 50% 감면 추진',
        '강남 재건축 단지 투자 매력 급상승',
        '부담금 감면 확정 시 재건축 대장주 주목',
        `<p class="text-xl font-black mb-6">재건축 부담금 절반으로 준다고? 🏗️</p>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-8 border-l-4 border-emerald-500">
            <p class="text-lg font-bold">📌 핵심</p>
            <p class="text-base">초과이익환수 부담금 <strong>50% 감면</strong> 추진</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 포인트</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>✅ 강남 재건축 단지 투자 매력 ↑</li>
                <li>⚠️ 아직 법안 확정 전 — 국회 통과 지켜봐야</li>
            </ul>
        </div>`),
    a('re7', 'real-estate', '지방 미분양 3만 돌파 ⚠️ 양극화 심화', null,
        '지방 미분양 3만 가구 돌파, 10년 만에 최대',
        '수도권은 품귀, 지방은 미분양 폭증 — 양극화',
        '지방 투자는 역세권·대단지만, 리스크 관리',
        `<p class="text-xl font-black mb-6">지방 미분양 3만 가구 돌파 ⚠️ 조심!</p>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-8 border-l-4 border-emerald-500">
            <p class="text-lg font-bold">📌 데이터</p>
            <p class="text-base">지방 미분양 <strong>3만 가구</strong> · 10년 만에 최대</p>
        </div>
        <h3 class="text-xl font-black mt-8 mb-4">💡 주의</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 mb-6">
            <ul class="space-y-3 text-base">
                <li>⚠️ 지방 투자는 <strong>역세권·대단지만</strong></li>
                <li>✅ 수도권·서울 실수요 중심이 안전</li>
            </ul>
        </div>`),
];
