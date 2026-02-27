import { useState } from 'react';
import { CATEGORY_STYLES, CATEGORIES } from '../data/insightData';

const FALLBACK_GRADIENTS = {
    'kr-stock': 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
    'real-estate': 'linear-gradient(135deg, #059669 0%, #065F46 100%)',
    'finance-tips': 'linear-gradient(135deg, #D97706 0%, #92400E 100%)',
    'us-stock': 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',
    'crypto': 'linear-gradient(135deg, #EA580C 0%, #9A3412 100%)',
};

export default function InsightCard({ insight, index, onClick }) {
    const [imgError, setImgError] = useState(false);
    const categoryStyle = CATEGORY_STYLES[insight.category] || {};
    const categoryInfo = CATEGORIES.find(c => c.id === insight.category);

    const formatDate = (dateStr) => {
        try { return new Date(dateStr).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' }); } catch { return ''; }
    };

    // 제목에서 이모지 추출 (있으면 사용)
    const emojiMatch = insight.title.match(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u);
    const titleEmoji = emojiMatch ? emojiMatch[0] : categoryInfo?.emoji;

    return (
        <article
            className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl card-hover border border-gray-100 dark:border-dark-border group animate-fade-in cursor-pointer"
            style={{ animationDelay: (index * 60) + 'ms' }}
            onClick={() => onClick && onClick(insight)}
        >
            {/* 이미지 + 제목 오버레이 (인스타 스타일) */}
            <div className="relative h-56 sm:h-60 overflow-hidden">
                {imgError ? (
                    <div className="w-full h-full flex items-center justify-center text-white text-5xl"
                        style={{ background: FALLBACK_GRADIENTS[insight.category] || 'linear-gradient(135deg, #1B3A5C 0%, #0A1628 100%)' }}>
                        {titleEmoji || '📊'}
                    </div>
                ) : (
                    <img src={insight.image} alt={insight.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy" onError={() => setImgError(true)} />
                )}
                {/* 그라데이션 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* 카테고리 배지 */}
                <div className="absolute top-3 left-3">
                    <span className={'category-badge ' + categoryStyle.bg + ' ' + categoryStyle.text + ' backdrop-blur-sm shadow-sm'}>
                        {categoryInfo?.emoji} {categoryInfo?.label}
                    </span>
                </div>

                {/* 제목 — 이미지 위 오버레이 (인스타 릴스 썸네일 느낌) */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg sm:text-xl font-black text-white leading-snug line-clamp-2 drop-shadow-lg">
                        {insight.title}
                    </h3>
                </div>

                {/* 호버 시 읽기 버튼 */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-100 scale-90 bg-white/95 dark:bg-dark-card/95 rounded-full px-5 py-2.5 text-sm font-bold text-gray-700 dark:text-dark-text shadow-xl">
                        📖 자세히 보기
                    </span>
                </div>
            </div>

            {/* 핵심 한 줄 요약 (불릿 대신 임팩트 있는 한 줄) */}
            <div className="p-5">
                {insight.bullets && insight.bullets.length > 0 && (
                    <p className="text-sm font-bold text-accent-600 dark:text-accent-400 mb-3 line-clamp-1">
                        🔥 {insight.bullets[1]?.text || insight.bullets[0]?.text}
                    </p>
                )}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-dark-border">
                    <span className="text-xs font-semibold text-gray-400 dark:text-dark-muted">{formatDate(insight.pubDate || insight.date)}</span>
                    <span className="text-xs font-bold text-accent-500 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        읽기 →
                    </span>
                </div>
            </div>
        </article>
    );
}
