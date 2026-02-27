import { useState, useMemo, useEffect, createContext, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import Header from './components/Header';
import HeroCard from './components/HeroCard';
import InsightCard from './components/InsightCard';
import AdSlot from './components/AdSlot';
import Footer from './components/Footer';
import ArticlePage from './components/ArticlePage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import AboutPage from './components/AboutPage';
import AdminPage from './components/AdminPage';
import ScrollToTop from './components/ScrollToTop';
import { CATEGORIES, API_BASE_URL, fallbackData, allArticles } from './data/insightData';

// 뉴스 데이터를 하위 컴포넌트와 공유하기 위한 Context
const NewsContext = createContext([]);
export const useNewsData = () => useContext(NewsContext);

function Dashboard() {
    const { insights } = useContext(NewsContext);
    const [activeCategory, setActiveCategory] = useState('all');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const heroInsight = useMemo(() => insights[0], [insights]);
    const filteredInsights = useMemo(() => {
        if (activeCategory === 'all') return insights;
        return insights.filter(item => item.category === activeCategory);
    }, [activeCategory, insights]);

    const handleCardClick = (insight) => navigate(`/article/${insight.id}`);

    const renderSections = () => {
        const cats = CATEGORIES.filter(c => c.id !== 'all');
        return cats.map(cat => {
            const items = insights.filter(i => i.category === cat.id);
            if (!items.length) return null;
            return (
                <section key={cat.id} className="mb-20 animate-fade-in">
                    <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-accent-200 dark:border-dark-border">
                        <span className="text-3xl">{cat.emoji}</span>
                        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-dark-text">{cat.label}</h2>
                        <span className="ml-auto text-xs font-bold text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/20 px-3 py-1.5 rounded-full">{items.length}개</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((ins, i) => <InsightCard key={ins.id} insight={ins} index={i} onClick={handleCardClick} />)}
                    </div>
                </section>
            );
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
            <Header activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <AdSlot type="banner" className="mb-12" />
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-40">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent-500 mb-4" />
                        <p className="text-gray-500 dark:text-dark-muted font-bold">최신 인사이트를 불러오는 중...</p>
                    </div>
                ) : (
                    <>
                        {activeCategory === 'all' && heroInsight && (
                            <div className="mb-16"><HeroCard insight={heroInsight} onClick={handleCardClick} /></div>
                        )}
                        {activeCategory === 'all' ? renderSections() : (
                            <>
                                <div className="flex items-center justify-between mb-10 pb-4 border-b-2 border-accent-200 dark:border-dark-border">
                                    <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-dark-text">
                                        {CATEGORIES.find(c => c.id === activeCategory)?.emoji} {CATEGORIES.find(c => c.id === activeCategory)?.label}
                                    </h2>
                                    <span className="text-sm font-bold text-accent-600 dark:text-accent-400">{filteredInsights.length}건</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredInsights.map((ins, i) => <InsightCard key={ins.id} insight={ins} index={i} onClick={handleCardClick} />)}
                                </div>
                            </>
                        )}
                        {filteredInsights.length === 0 && (
                            <div className="text-center py-32">
                                <p className="text-6xl mb-6">🔍</p>
                                <p className="text-2xl font-black text-gray-500 dark:text-dark-muted">해당 카테고리에 인사이트가 없습니다.</p>
                            </div>
                        )}
                    </>
                )}
                <AdSlot type="banner" className="mt-20" />
            </main>
            <Footer />
        </div>
    );
}

export default function App() {
    const [insights, setInsights] = useState(allArticles);

    // 서버에서 뉴스 가져오기 (앱 레벨에서 1회 호출)
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/news`);
                const result = await response.json();
                if (result.success && Array.isArray(result.data) && result.data.length > 0) {
                    // 서버 데이터 + 정적 데이터 병합 (중복 제거)
                    const serverIds = new Set(result.data.map(a => a.id));
                    const uniqueStatic = allArticles.filter(a => !serverIds.has(a.id));
                    setInsights([...result.data, ...uniqueStatic]);
                }
            } catch {
                // 서버 연결 실패 시 정적 데이터 유지
            }
        };
        fetchNews();
    }, []);

    return (
        <DarkModeProvider>
            <NewsContext.Provider value={{ insights }}>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/article/:id" element={<ArticlePage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                </Routes>
            </NewsContext.Provider>
        </DarkModeProvider>
    );
}
