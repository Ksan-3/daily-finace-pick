// 카테고리 정의
export const CATEGORIES = [
    { id: 'all', label: '전체', emoji: '📊', color: 'bg-gray-500' },
    { id: 'kr-stock', label: '한국 증시', emoji: '📈', color: 'bg-red-500' },
    { id: 'real-estate', label: '한국 부동산', emoji: '🏠', color: 'bg-emerald-600' },
    { id: 'finance-tips', label: '2030 재테크 가이드', emoji: '💡', color: 'bg-amber-500' },
    { id: 'us-stock', label: '미국 증시', emoji: '🇺🇸', color: 'bg-blue-600' },
    { id: 'crypto', label: '코인', emoji: '🪙', color: 'bg-orange-500' },
];

export const CATEGORY_STYLES = {
    'kr-stock': { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-300', border: 'border-red-200', accent: 'text-red-500' },
    'real-estate': { bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-700 dark:text-emerald-300', border: 'border-emerald-200', accent: 'text-emerald-500' },
    'finance-tips': { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-700 dark:text-amber-300', border: 'border-amber-200', accent: 'text-amber-500' },
    'us-stock': { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-200', accent: 'text-blue-500' },
    'crypto': { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-700 dark:text-orange-300', border: 'border-orange-200', accent: 'text-orange-500' },
};

export const API_BASE_URL = '/api';
