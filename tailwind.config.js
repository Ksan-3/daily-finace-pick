/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // 다크 네이비 팔레트 (신뢰감 있는 금융 미디어)
                primary: {
                    50: '#E8EDF4',
                    100: '#C5D1E3',
                    200: '#9BB1CF',
                    300: '#7191BB',
                    400: '#4A6FA3',
                    500: '#1B3A5C',
                    600: '#15304E',
                    700: '#0F2640',
                    800: '#0A1C32',
                    900: '#061224',
                },
                // 골드 액센트 팔레트 (프리미엄 금융 톤)
                accent: {
                    50: '#FFF9EB',
                    100: '#FFF0CC',
                    200: '#FFE299',
                    300: '#FFD466',
                    400: '#F5C542',
                    500: '#D4A853',
                    600: '#C49B3F',
                    700: '#B08D2B',
                    800: '#957520',
                    900: '#7A5E15',
                },
                // 다크모드 배경 (짙은 네이비 기반)
                dark: {
                    bg: '#0A1628',
                    card: '#121F36',
                    border: '#1E3050',
                    text: '#E2E8F0',
                    muted: '#8899B0',
                }
            },
            fontFamily: {
                pretendard: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
