import React from 'react';

export default function Logo({ className = "w-auto h-8" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 200 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* 돋보기/전구 형태를 모티브로 한 통찰(Insight) 심볼 */}
            <circle cx="28" cy="30" r="16" stroke="currentColor" strokeWidth="4" className="text-primary-700 dark:text-primary-400" />
            {/* 상승하는 그래프(돈버는 선형 그래프) 요소 */}
            <path d="M18 36 L26 28 L32 30 L40 18 L44 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500" />
            <path d="M40 18 L40 24 M40 18 L34 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500" />

            {/* 텍스트 로고 영역 (재테크 픽) */}
            <text x="60" y="38" fontFamily="Pretendard, sans-serif" fontSize="24" fontWeight="800" fill="currentColor" className="text-gray-900 dark:text-white tracking-widest">
                재테크 <tspan fill="#10B981">픽</tspan>
            </text>
        </svg>
    );
}
