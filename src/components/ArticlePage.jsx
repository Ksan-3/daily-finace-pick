import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useNewsData } from '../App';
import { getArticleById, CATEGORY_STYLES, CATEGORIES } from '../data/insightData';
import AdSlot from './AdSlot';
import AiExpertOpinion from './AiExpertOpinion';

export default function ArticlePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { insights } = useNewsData();

    // 1단계: Context (서버 + 정적) 데이터에서 검색
    // 2단계: 정적 데이터 직접 검색 (폴백)
    const article = insights.find(a => a.id === id) || getArticleById(id);

    // 기사를 찾지 못한 경우
    if (!article) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-dark-bg flex items-center justify-center">
                <div className="text-center">
                    <p className="text-6xl mb-6">📄</p>
                    <h2 className="text-2xl font-black text-gray-700 dark:text-dark-text mb-2">기사를 찾을 수 없습니다</h2>
                    <button onClick={() => navigate('/')} className="mt-6 px-6 py-3 bg-accent-500 text-white rounded-xl font-bold hover:bg-accent-600 transition-colors">← 메인으로 돌아가기</button>
                </div>
            </div>
        );
    }

    const catInfo = CATEGORIES.find(c => c.id === article.category);
    const catStyle = CATEGORY_STYLES[article.category] || {};
    const formatDate = (d) => { try { return new Date(d).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }); } catch { return ''; } };

    // 본문 HTML에서 두 번째 </p> 이후에 광고 삽입
    const insertAdInContent = (html) => {
        const parts = html.split('</p>');
        if (parts.length > 2) {
            return parts.slice(0, 2).join('</p>') + '</p><div class="ad-insert-point"></div>' + parts.slice(2).join('</p>');
        }
        return html;
    };

    // 본문 렌더링 (articleContent 있으면 장문, 없으면 요약 + 원본 링크)
    const renderContent = () => {
        if (article.articleContent) {
            return (
                <>
                    <div className="article-content" dangerouslySetInnerHTML={{ __html: insertAdInContent(article.articleContent) }} />
                    <AdSlot type="inline" className="my-10" />
                </>
            );
        }

        // 서버 수집 뉴스: 요약 + 원본 링크
        return (
            <div className="article-content">
                <h2>📌 뉴스 요약</h2>
                <p>{article.description || article.bullets?.map(b => b.text).join(' ')}</p>

                {article.link && (
                    <div className="mt-8 p-6 bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border text-center">
                        <p className="text-sm text-gray-500 dark:text-dark-muted mb-3">원본 기사에서 자세한 내용을 확인하세요</p>
                        <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-bold transition-colors"
                        >
                            🔗 원본 기사 보기
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                    </div>
                )}

                <AdSlot type="inline" className="my-10" />
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
            {/* 히어로 섹션 */}
            <div className="relative h-[360px] sm:h-[420px] overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 gradient-overlay" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 max-w-4xl mx-auto">
                    <span className={'category-badge mb-4 ' + catStyle.bg + ' ' + catStyle.text}>{catInfo?.emoji} {catInfo?.label}</span>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-4">{article.title}</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                        <span className="flex items-center gap-1.5"><span className="w-7 h-7 rounded-full bg-accent-500 flex items-center justify-center text-white text-xs font-bold">AI</span> AI Insight Bot</span>
                        <span>·</span>
                        <span>{formatDate(article.pubDate)}</span>
                        <span>·</span>
                        <span>📖 5분 읽기</span>
                    </div>
                </div>
            </div>

            {/* 뒤로가기 + 본문 */}
            <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
                <button onClick={() => navigate('/')} className="flex items-center gap-2 text-sm text-gray-500 dark:text-dark-muted hover:text-accent-500 transition-colors mb-8 font-semibold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    메인으로 돌아가기
                </button>

                {/* 3-Step 요약 박스 */}
                <div className="bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-dark-border p-6 mb-10 gold-glow">
                    <h3 className="text-sm font-extrabold text-accent-600 dark:text-accent-400 uppercase tracking-wider mb-4">📋 3-Step 핵심 요약</h3>
                    <div className="space-y-3">
                        {article.bullets?.map((b, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <span className={`inline-block min-w-[40px] text-[11px] font-bold px-2 py-1 rounded text-center flex-shrink-0 ${b.type === 'context' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300' :
                                    b.type === 'core' ? 'bg-accent-100 text-accent-700 dark:bg-accent-900/40 dark:text-accent-300' :
                                        'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                                    }`}>{b.label}</span>
                                <span className="text-sm text-gray-700 dark:text-dark-text leading-relaxed">{b.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 광고 — 본문 시작 전 */}
                <AdSlot type="banner" className="mb-10" />

                {/* 본문 렌더링 */}
                {renderContent()}

                {/* AI 전문가 2000자 통찰 (기존 상태 유지 + 추가) */}
                <AiExpertOpinion article={article} categoryInfo={catInfo} />

                {/* 하단 광고 */}
                <AdSlot type="banner" className="mt-10 mb-10" />

                {/* 면책 조항 */}
                <div className="bg-gray-100 dark:bg-dark-card rounded-xl p-5 text-xs text-gray-500 dark:text-dark-muted leading-relaxed border border-gray-200 dark:border-dark-border">
                    <p className="font-bold mb-2">⚠️ 투자 유의사항</p>
                    <p>본 콘텐츠는 투자 참고용이며, 특정 자산의 매수·매도를 권유하지 않습니다. 투자의 최종 결정과 책임은 투자자 본인에게 있습니다. AI가 분석·재가공한 인사이트이며, 실제 투자 시 전문가와 상담하시기 바랍니다.</p>
                </div>

                {/* 메인으로 돌아가기 */}
                <div className="text-center mt-12">
                    <button onClick={() => navigate('/')} className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-extrabold text-lg transition-all hover:scale-105 shadow-lg shadow-primary-500/20">
                        📊 더 많은 인사이트 보기
                    </button>
                </div>
            </main>
        </div>
    );
}
