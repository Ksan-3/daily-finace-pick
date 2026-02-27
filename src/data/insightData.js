// 통합 데이터 모듈 — 모든 카테고리 데이터를 하나로 합칩니다
export { CATEGORIES, CATEGORY_STYLES, API_BASE_URL } from './categories.js';
import { krStockData } from './articles_kr_stock.js';
import { realEstateData } from './articles_real_estate.js';
import { financeTipsData } from './articles_finance_tips.js';
import { usStockData } from './articles_us_stock.js';
import { cryptoData } from './articles_crypto.js';

// 폴백 데이터 (서버 미가동 시 사용)
export const fallbackData = {
    'kr-stock': krStockData,
    'real-estate': realEstateData,
    'finance-tips': financeTipsData,
    'us-stock': usStockData,
    'crypto': cryptoData,
};

// 전체 기사 목록 (flat)
export const allArticles = [
    ...krStockData,
    ...realEstateData,
    ...financeTipsData,
    ...usStockData,
    ...cryptoData,
];

// ID로 기사 찾기
export function getArticleById(id) {
    return allArticles.find(article => article.id === id) || null;
}
