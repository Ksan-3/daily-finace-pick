import { useNavigate } from 'react-router-dom';

export default function PrivacyPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
            <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
                <button onClick={() => navigate('/')} className="flex items-center gap-2 text-sm text-gray-500 dark:text-dark-muted hover:text-accent-500 transition-colors mb-8 font-semibold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    메인으로 돌아가기
                </button>

                <h1 className="text-3xl font-black text-gray-900 dark:text-dark-text mb-10">🔒 개인정보처리방침</h1>

                <div className="prose dark:prose-invert max-w-none article-content space-y-6 text-gray-700 dark:text-dark-text leading-relaxed">
                    <p className="text-sm text-gray-500 dark:text-dark-muted">시행일: 2026년 2월 26일</p>

                    <h2>1. 개인정보의 수집 및 이용 목적</h2>
                    <p>데일리 재테크 픽(이하 "사이트")은 서비스 제공을 위해 최소한의 개인정보를 수집합니다. 수집된 정보는 서비스 개선 및 사용자 경험 향상을 위해서만 사용됩니다.</p>

                    <h2>2. 수집하는 개인정보 항목</h2>
                    <p>본 사이트는 별도의 회원가입 절차가 없으며, 다음과 같은 정보만을 자동으로 수집합니다:</p>
                    <ul>
                        <li>방문자의 IP 주소, 브라우저 유형, 접속 시간 (서버 로그)</li>
                        <li>Google Analytics를 통한 방문 통계 (익명 처리)</li>
                        <li>Google AdSense를 통한 쿠키 정보 (광고 제공 목적)</li>
                    </ul>

                    <h2>3. 개인정보의 보유 및 이용 기간</h2>
                    <p>자동 수집되는 로그 정보는 통계 분석 후 최대 1년간 보관되며, 이후 즉시 파기됩니다.</p>

                    <h2>4. 쿠키(Cookie) 사용</h2>
                    <p>본 사이트는 Google AdSense 및 Google Analytics 서비스를 이용하며, 이 과정에서 쿠키가 사용됩니다. 쿠키는 사용자의 브라우저 설정을 통해 거부할 수 있으나, 일부 서비스 이용에 제한이 있을 수 있습니다.</p>

                    <h2>5. 제3자 제공</h2>
                    <p>본 사이트는 수집된 개인정보를 제3자에게 제공하지 않습니다. 단, 다음의 경우는 예외로 합니다:</p>
                    <ul>
                        <li>법령에 의해 요구되는 경우</li>
                        <li>수사 기관의 적법한 요청이 있는 경우</li>
                    </ul>

                    <h2>6. Google AdSense 관련 고지</h2>
                    <p>본 사이트는 Google AdSense를 통해 광고를 게재할 수 있습니다. Google은 사용자의 관심사에 기반한 광고를 제공하기 위해 DART 쿠키를 사용할 수 있습니다. 사용자는 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline">Google 광고 설정</a>에서 맞춤 광고를 비활성화할 수 있습니다.</p>

                    <h2>7. 이용자의 권리</h2>
                    <p>사용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제를 요청할 수 있습니다. 관련 문의는 아래 연락처로 보내주시기 바랍니다.</p>

                    <h2>8. 개인정보 보호책임자</h2>
                    <ul>
                        <li>사이트명: 데일리 재테크 픽</li>
                        <li>이메일: contact@dailyfinancepick.com</li>
                    </ul>

                    <h2>9. 변경사항 고지</h2>
                    <p>개인정보처리방침이 변경될 경우, 사이트 내 공지를 통해 안내합니다.</p>
                </div>
            </main>
        </div>
    );
}
