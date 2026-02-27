import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-primary-900 dark:bg-dark-bg border-t border-primary-800 dark:border-dark-border mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">📊</span>
                            <h3 className="text-lg font-black"><span className="text-white">데일리</span> <span className="text-accent-400">재테크 픽</span></h3>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            매일 엄선된 프리미엄 금융 인사이트.<br />
                            코인, 주식, 부동산, 재테크 분석을 AI의 시선으로 제공합니다.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-accent-400 uppercase tracking-wider">카테고리</h4>
                        <ul className="space-y-2">
                            {['📈 한국 증시', '🏠 한국 부동산', '💡 2030 재테크 가이드', '🇺🇸 미국 증시', '🪙 코인'].map(cat => (
                                <li key={cat}><span className="text-sm text-gray-400 hover:text-accent-400 cursor-pointer transition-colors">{cat}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-accent-400 uppercase tracking-wider">안내사항</h4>
                        <div className="text-xs text-gray-500 leading-relaxed space-y-2">
                            <p>⚠️ 본 사이트의 모든 정보는 투자 참고용이며, 투자의 최종 결정과 책임은 이용자 본인에게 있습니다.</p>
                            <p>📋 콘텐츠는 공개된 정보를 기반으로 AI가 분석·재가공한 인사이트이며, 특정 종목이나 자산의 매수·매도를 권유하지 않습니다.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 pt-6 border-t border-primary-800 dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500">© 2026 데일리 재테크 픽. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <Link to="/privacy" className="text-xs text-gray-500 hover:text-accent-400 transition-colors">개인정보처리방침</Link>
                        <span className="text-xs text-gray-600">|</span>
                        <Link to="/terms" className="text-xs text-gray-500 hover:text-accent-400 transition-colors">이용약관</Link>
                        <span className="text-xs text-gray-600">|</span>
                        <Link to="/about" className="text-xs text-gray-500 hover:text-accent-400 transition-colors">사이트 소개</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
