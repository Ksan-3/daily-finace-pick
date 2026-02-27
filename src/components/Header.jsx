import { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { CATEGORIES } from '../data/insightData';

export default function Header({ activeCategory, onCategoryChange }) {
    const { isDark, toggleDarkMode } = useDarkMode();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navCategories = CATEGORIES;

    return (
        <header className="sticky top-0 z-50 glass border-b border-gray-200 dark:border-dark-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onCategoryChange('all')}>
                        <span className="text-2xl">📊</span>
                        <h1 className="text-xl sm:text-2xl font-black tracking-tight">
                            <span className="text-primary-500 dark:text-gray-100">데일리</span>{' '}
                            <span className="text-gold-gradient">재테크 픽</span>
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <button onClick={toggleDarkMode} className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-dark-border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2" aria-label="다크모드 토글">
                            <span className={'absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center text-sm ' + (isDark ? 'translate-x-7' : 'translate-x-0')}>
                                {isDark ? '🌙' : '☀️'}
                            </span>
                        </button>
                        <button className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-border transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="메뉴 열기">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                            </svg>
                        </button>
                    </div>
                </div>
                <nav className="hidden lg:flex items-center gap-3 pb-5 overflow-x-auto no-scrollbar">
                    {navCategories.map(cat => (
                        <button key={cat.id} onClick={() => onCategoryChange(cat.id)}
                            className={'px-7 py-3.5 rounded-2xl text-base font-extrabold whitespace-nowrap transition-all duration-300 ' +
                                (activeCategory === cat.id
                                    ? 'bg-primary-500 text-white shadow-xl shadow-primary-500/30 scale-105 ring-2 ring-accent-500/50 ring-offset-2 dark:ring-offset-dark-bg'
                                    : 'text-gray-600 dark:text-dark-muted hover:bg-gray-100 dark:hover:bg-dark-border hover:scale-[1.03]')
                            }>
                            <span className="mr-2 text-lg">{cat.emoji}</span>{cat.label}
                        </button>
                    ))}
                </nav>
            </div>
            {isMobileMenuOpen && (
                <div className="lg:hidden border-t border-gray-200 dark:border-dark-border animate-fade-in">
                    <div className="px-4 py-3 space-y-1">
                        {navCategories.map(cat => (
                            <button key={cat.id} onClick={() => { onCategoryChange(cat.id); setIsMobileMenuOpen(false); }}
                                className={'w-full text-left px-5 py-3.5 rounded-xl text-base font-bold transition-all ' +
                                    (activeCategory === cat.id ? 'bg-primary-500 text-white' : 'text-gray-600 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-border')
                                }>
                                <span className="mr-2 text-lg">{cat.emoji}</span>{cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
