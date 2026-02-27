import { useEffect } from 'react';

export default function ArticleModal({ article, onClose }) {
    if (!article) return null;

    // ESC 키로 닫기
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    // 날짜 포맷
    const formatDate = (dateStr) => {
        try {
            const d = new Date(dateStr);
            return d.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' });
        } catch {
            return dateStr;
        }
    };

    const getBulletStyle = (type) => {
        const styles = {
            context: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-800',
            core: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
            action: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 border-amber-200 dark:border-amber-800',
        };
        return styles[type] || '';
    };

    const getBulletIcon = (type) => {
        const icons = { context: '📌', core: '🎯', action: '🚀' };
        return icons[type] || '•';
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            onClick={onClose}
        >
            {/* 백드롭 */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* 모달 컨텐츠 */}
            <div
                className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-dark-card rounded-2xl shadow-2xl overflow-hidden animate-slide-up"
                onClick={(e) => e.stopPropagation()}
            >
                {/* 닫기 버튼 */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
                    aria-label="닫기"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* 히어로 이미지 */}
                <div className="relative h-56 sm:h-72 overflow-hidden">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-16">
                        <p className="text-xs text-gray-300 mb-2">{formatDate(article.pubDate)}</p>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight drop-shadow-lg">
                            {article.title}
                        </h2>
                    </div>
                </div>

                {/* 본문 */}
                <div className="p-6 sm:p-8 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 288px)' }}>
                    {/* 3-Step 분석 */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-dark-text mb-4 flex items-center gap-2">
                        <span className="text-xl">📊</span> 핵심 분석
                    </h3>

                    <div className="space-y-4 mb-8">
                        {article.bullets && article.bullets.map((bullet, idx) => (
                            <div
                                key={idx}
                                className={'rounded-xl border p-4 ' + getBulletStyle(bullet.type)}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-lg">{getBulletIcon(bullet.type)}</span>
                                    <span className="font-bold text-sm uppercase tracking-wider">{bullet.label}</span>
                                </div>
                                <p className="text-sm leading-relaxed">{bullet.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* 기사 요약 (description이 있는 경우) */}
                    {article.description && (
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-dark-text mb-3 flex items-center gap-2">
                                <span className="text-xl">📰</span> 상세 내용
                            </h3>
                            <div className="bg-gray-50 dark:bg-dark-bg rounded-xl p-5 border border-gray-200 dark:border-dark-border">
                                <p className="text-sm text-gray-700 dark:text-dark-text leading-relaxed whitespace-pre-line">
                                    {article.description}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* 면책조항 + 원문 링크 */}
                    <div className="border-t border-gray-200 dark:border-dark-border pt-4 mt-4">
                        <p className="text-xs text-gray-400 dark:text-dark-muted mb-3">
                            ⚠️ 본 분석은 공개된 뉴스를 AI가 재가공한 것으로, 투자의 최종 판단은 본인에게 있습니다.
                        </p>
                        {article.link && (
                            <a
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-lg transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                원문 기사 보기
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
