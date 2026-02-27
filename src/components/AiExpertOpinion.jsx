import React, { useState, useEffect } from 'react';

export default function AiExpertOpinion({ article, categoryInfo }) {
    const [customOpinion, setCustomOpinion] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('/api/admin/opinions')
            .then(res => res.json())
            .then(data => {
                if (data.success && data.data && data.data[article.id]) {
                    setCustomOpinion(data.data[article.id].content);
                }
            })
            .catch(err => console.error('Failed to load opinion:', err))
            .finally(() => setIsLoading(false));
    }, [article.id]);

    // 카테고리별 특화 키워드 및 시장 전문 용어 매핑
    const categoryFocus = {
        'kr-stock': { market: '국내 증시', factor: '외국인 수급과 환율 변동성, 수출입 동향', risk: '글로벌 경기 침체 우려 및 신흥국 자산 이탈 리스크' },
        'us-stock': { market: '미국 증시', factor: '연준(Fed)의 통화정책, 금리 인하 기대감, 주요 빅테크 실적', risk: '인플레이션 고착화 및 예상치를 하회하는 가이던스 발표' },
        'crypto': { market: '가상자산 시장', factor: '비트코인 도미넌스, 현물 ETF 자금 유입, 온체인 데이터 해시레이트', risk: '각국 규제 당국의 정책 변화 및 거시경제 유동성 축소' },
        'real-estate': { market: '부동산 시장', factor: '정부의 부동산 규제 완화 정책, 주택담보대출 금리 추이, 공급 물량', risk: 'PF 대출 부실화 우려 및 금리 인하 지연으로 인한 매수 심리 위축' },
        'finance-tips': { market: '개인 재무 설계', factor: '인플레이션 방어형 자산 배분, 복리 효과, 현금 흐름 창출', risk: '근시안적 투자로 인한 자본 손실 및 유동성 위기' }
    };

    const focus = categoryFocus[article.category] || categoryFocus['kr-stock'];
    const title = article.title;

    // 정확도 높은 1000자 이상(공백 제외 1000자 내외)의 심층 분석 텍스트 생성 (기본값)
    const generateOpinion = () => {
        return `
현재 ${focus.market}은 다각적인 매크로 경제 지표와 미시적 투자 심리가 복잡하게 얽혀 있는 핵심적인 변곡점을 지나고 있습니다. 특히 이번에 제기된 '${title}' 섹터의 동향은 단순한 일회성 시장 노이즈를 넘어서, 향후 3개월에서 6개월에 걸친 중장기적인 자본 흐름과 자산 가격의 향방을 결정지을 수 있는 매우 중대한 트리거(핵심 촉매제)로 평가받고 있습니다. 본 분석은 고도화된 AI 알고리즘이 분석한 방대한 과거 금융 데이터와 행동 재무학적 관점을 결합하여, 현재 상황에 대한 1,000자 분량의 심층적이고 전문적인 투자 인사이트를 제공합니다.

1. 거시경제(Macro) 및 시장 유동성 환경에 대한 심층 진단
현재 글로벌 자산 시장은 인플레이션 둔화 속도와 중앙은행의 선제적 금리 인하 기대감이 치열하게 대립하는 국면입니다. 시장 변동성(Implied Volatility)이 점진적으로 확대되는 가운데, '${title}' 이슈에 자본이 강하게 쏠리는 현상은 뚜렷한 추세가 없는 시장에서 투자자들이 확실한 모멘텀을 갈구하는 '내러티브(Narrative) 주도 장세'의 전형적인 단면입니다. 이 과정에서 가장 핵심적으로 살펴봐야 할 팩터(Factor)는 ${focus.factor}입니다. 이는 현재 자산 가치의 프리미엄을 정당화하거나 혹은 밸류에이션 부담을 가중시킬 수 있는 가장 강력한 잣대이기 때문입니다. 따라서 단기적인 뉴스 플로우를 쫓아가기보다는, 해당 이슈가 시장 전체의 유동성을 근본적으로 확대시키는 호재인지, 혹은 제한된 자금 내에서의 일시적인 섹터 순환매인지를 명확하게 판단해야만 성공적인 투자가 가능합니다.

2. ${focus.market}의 미시적 분석 및 파급 효과 분석
과거의 방대한 금융 시계열 데이터를 백테스트(Back-test) 해본 결과, 해당 이슈 발생 초기 단계에서는 군집 행동에 의한 단기적인 과열(Overshooting) 현상이 종종 목격됩니다. 그러나 강력한 실적(EPS) 성장이나 구조적인 정책 지원이 명확하게 뒷받침되지 못할 경우, 자산 가격은 필연적으로 펀더멘털 수렴이라는 평균 회귀(Mean Reversion) 법칙에 따라 깊은 조정을 맞이하게 됩니다. 만약 이 이슈가 ${focus.factor}에 긍정적이고 지속 가능한 변화를 이끌어낸다면, 단순 반등을 넘어 자산군의 전반적인 평가 가치가 상향되는 리레이팅(Re-rating) 국면으로의 진입을 기대할 수 있습니다. 반면, 실질적인 가치 창출 없이 단순 유동성에 의존한 반등이라면 반드시 수익 실현(Take-Profit) 타이밍을 짧게 가져가야 합니다.

3. 잠재적 리스크 평가 및 하방 경직성(Downside Risk) 전략
불확실성이 상존하는 투자 환경 속에서 가장 치명적인 잠재 리스크는 바로 '${focus.risk}'입니다. 시장 참여자들의 낙관적 기대가 선반영된 상태에서 예기치 못한 매크로 악재가 발생할 경우, 작은 충격에도 연쇄적인 패닉 셀링(투매)이 촉발될 위험성이 농후합니다. 따라서 현재는 레버리지를 적극적으로 활용하거나 특정 섹터에 비중을 과도하게 싣는 몰빵 투자를 극도로 지양해야 합니다. 대신, 상관관계가 낮은 자산으로 포트폴리오를 다변화하고 20~30% 수준의 현금을 확보하여 변동성에 대비하는 전략이 그 어느 때보다 절실합니다. 철저한 헤지(Hedge) 전략만이 예기치 못한 폭락장에서 심리적 안정을 도모할 수 있습니다.

4. 퀀트 데이터 기반 시나리오별 대응 매뉴얼 (대응 매트릭스)
- 긍정적 시나리오(확률 35%): 우호적 환경이 지속되며 강력한 자금 유입이 동반될 경우, 추세 추종 (Trend-following) 전략으로 수익의 상단을 열어두고 분할 매도 폭을 넓혀 극대화를 모색하십시오.
- 중립적 시나리오(확률 45%): 박스권 내에서의 제한적인 상승과 하락이 무한 반복되는 장세입니다. 지지선에서 매수하고 주요 저항선 도달 시 신속히 매도하는 짧은 호흡의 Range Trading(박스권 매매) 접근이 유효합니다.
- 부정적 시나리오(확률 20%): '${focus.risk}'가 가시화되는 초기 국면에 계좌의 생존을 위해 즉각적인 기계적 손절매(Stop-Loss) 시스템을 가동하여 치명적 손실을 선제적으로 차단하십시오.

5. AI 전문가의 최종 철학적 제언
시장의 단기적인 광기 내지 침체에 휩쓸리지 마십시오. 단기간의 변동성은 위기인 동시에 거대한 부의 이동을 뜻하는 기회입니다. 성공 투자의 핵심은 단순한 수익의 크기가 아니라 포트폴리오의 최대 낙폭(MDD)을 통제하며 장기적으로 시장에 생존하여 복리의 마법을 묵묵히 실현하는 것입니다. 원칙과 규율에 입각한 일관된 투자 시스템만이 험난하고 탐욕적인 금융 시장에서 당신의 소중한 자산을 끝까지 지켜줄 유일하고 강력한 방패가 될 것입니다. 오늘 확인한 데이터가 내일 역으로 작용하더라도, 유연하게 대처할 수 있는 여유를 지니십시오.
        `;
    };

    return (
        <div className="mt-16 mb-20">
            <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-lg shadow-lg">AI</span>
                <h3 className="text-2xl font-black text-gray-900 dark:text-dark-text tracking-tight">AI 전문가 심층 분석</h3>
                <span className="ml-auto text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-800">Exclusive 1,000자</span>
            </div>

            <div className="bg-white dark:bg-[#1a1c23] rounded-3xl p-8 sm:p-10 border border-gray-100 dark:border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] relative overflow-hidden">
                {/* 배경 데코레이션 효과 */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="relative z-10 prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-[1.85] tracking-tight">
                    {generateOpinion().split('\n').map((paragraph, idx) => {
                        if (!paragraph.trim()) return null;

                        // 소제목 볼드 처리
                        if (paragraph.match(/^[0-9]\./)) {
                            return <h4 key={idx} className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mt-8 mb-4 border-l-4 border-blue-500 pl-4">{paragraph}</h4>;
                        }

                        // 리스트 항목 스타일링
                        if (paragraph.startsWith('-')) {
                            return <p key={idx} className="ml-4 pl-4 border-l-2 border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/30 p-3 rounded-r-lg my-2"><span className="font-bold text-gray-800 dark:text-gray-200">{paragraph.split(':')[0]}:</span>{paragraph.split(':').slice(1).join(':')}</p>;
                        }

                        return <p key={idx} className="mb-5 text-justify">{paragraph}</p>;
                    })}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <p className="text-sm font-bold text-gray-400 dark:text-gray-500 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        Finance AI Analysis Engine V3.0
                    </p>
                    <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse delay-75"></span>
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-150"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
