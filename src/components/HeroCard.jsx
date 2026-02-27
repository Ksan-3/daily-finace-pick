import { useState } from 'react';
import { CATEGORY_STYLES } from '../data/insightData';

export default function HeroCard({ insight, onClick }) {
    const [imgError, setImgError] = useState(false);
    if (!insight) return null;
    const categoryStyle = CATEGORY_STYLES[insight.category] || {};
    const labels = { 'us-stock': '🇺🇸 미국 증시', 'kr-stock': '📈 한국 증시', 'crypto': '🪙 코인', 'real-estate': '🏠 한국 부동산', 'finance-tips': '💡 2030 재테크 가이드' };

    const getBulletStyle = (type) => {
        const s = { context: 'bg-primary-500/30 text-primary-200', core: 'bg-accent-500/30 text-accent-200', action: 'bg-emerald-500/30 text-emerald-200' };
        return s[type] || '';
    };

    return (
        <section className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden card-hover group cursor-pointer" onClick={() => onClick && onClick(insight)}>
            {imgError ? (
                <div className="absolute inset-0 w-full h-full" style={{ background: 'linear-gradient(135deg, #1B3A5C 0%, #0A1628 50%, #D4A853 100%)' }} />
            ) : (
                <img src={insight.image} alt={insight.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="eager" onError={() => setImgError(true)} />
            )}
            <div className="absolute inset-0 gradient-overlay" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10">
                <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent-500 text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-accent-500/30 animate-pulse-slow">🔥 오늘의 TOP 인사이트</span>
                    <span className={'category-badge ' + categoryStyle.bg + ' ' + categoryStyle.text}>{labels[insight.category] || insight.category}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-5 drop-shadow-lg">{insight.title}</h2>
                <div className="space-y-2.5 mb-5">
                    {insight.bullets && insight.bullets.map((b, i) => (
                        <div key={i} className="flex items-start text-sm sm:text-base text-gray-100">
                            <span className={'inline-block min-w-[42px] font-bold text-xs px-1.5 py-0.5 rounded mr-2 mt-0.5 text-center ' + getBulletStyle(b.type)}>{b.label}</span>
                            <span className="leading-relaxed">{b.text}</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center text-sm text-gray-300 group-hover:text-accent-400 transition-colors">
                    <span>📖 클릭하여 자세히 보기</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
            </div>
        </section>
    );
}
