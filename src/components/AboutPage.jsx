import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
            <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
                <button onClick={() => navigate('/')} className="flex items-center gap-2 text-sm text-gray-500 dark:text-dark-muted hover:text-accent-500 transition-colors mb-8 font-semibold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    메인으로 돌아가기
                </button>

                <h1 className="text-3xl font-black text-gray-900 dark:text-dark-text mb-10">📊 데일리 재테크 픽 소개</h1>

                <div className="prose dark:prose-invert max-w-none article-content space-y-6 text-gray-700 dark:text-dark-text leading-relaxed">
                    <div className="bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-dark-border p-8 mb-8">
                        <h2 className="text-xl font-black text-accent-600 dark:text-accent-400 mb-4">🎯 우리의 미션</h2>
                        <p className="text-lg leading-relaxed">
                            <strong>데일리 재테크 픽</strong>은 복잡한 금융 시장 정보를 누구나 쉽게 이해할 수 있도록, AI 기술을 활용하여 매일 엄선된 프리미엄 금융 인사이트를 제공하는 플랫폼입니다.
                        </p>
                    </div>

                    <h2>📌 서비스 소개</h2>
                    <p>데일리 재테크 픽은 국내외 금융 시장의 핵심 이슈를 빠르고 정확하게 분석하여, 투자자들이 합리적인 의사결정을 할 수 있도록 돕습니다.</p>

                    <h3>제공하는 콘텐츠</h3>
                    <ul>
                        <li><strong>📈 한국 증시</strong> — 코스피·코스닥 핵심 종목 분석, 외국인·기관 수급 동향, 섹터별 투자 전략</li>
                        <li><strong>🇺🇸 미국 증시</strong> — 나스닥·S&P500 빅테크 분석, 연준 정책 영향, 글로벌 매크로 인사이트</li>
                        <li><strong>🏠 한국 부동산</strong> — 수도권·지방 부동산 시장 동향, 정책 변화 분석, 투자 유망 지역 안내</li>
                        <li><strong>🪙 코인</strong> — 비트코인·이더리움 등 주요 암호화폐 시장 분석, 규제 동향, 기술적 분석</li>
                        <li><strong>💡 2030 재테크 가이드</strong> — 사회초년생을 위한 실용적 재테크 팁, 저축·투자 전략, 세금 절약 가이드</li>
                    </ul>

                    <h2>🤖 AI 기반 분석</h2>
                    <p>모든 콘텐츠는 공개된 정보와 데이터를 기반으로 AI가 분석·재가공하여 제공됩니다. 전문가 의견과 데이터를 결합한 3-Step 요약(현상-핵심-전략) 방식으로, 바쁜 현대인도 빠르게 핵심을 파악할 수 있습니다.</p>

                    <h2>⚠️ 투자 안내</h2>
                    <p>본 사이트의 모든 정보는 투자 참고용이며, 특정 자산의 매수·매도를 권유하지 않습니다. 투자의 최종 결정과 책임은 이용자 본인에게 있으며, 실제 투자 전 반드시 전문가와 상담하시기 바랍니다.</p>

                    <h2>📬 문의하기</h2>
                    <p>사이트 이용에 관한 문의, 제휴 제안, 콘텐츠 관련 피드백은 아래 이메일로 보내주세요.</p>
                    <ul>
                        <li><strong>이메일:</strong> contact@dailyfinancepick.com</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
