import { useNavigate } from 'react-router-dom';

export default function TermsPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
            <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
                <button onClick={() => navigate('/')} className="flex items-center gap-2 text-sm text-gray-500 dark:text-dark-muted hover:text-accent-500 transition-colors mb-8 font-semibold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    메인으로 돌아가기
                </button>

                <h1 className="text-3xl font-black text-gray-900 dark:text-dark-text mb-10">📋 이용약관</h1>

                <div className="prose dark:prose-invert max-w-none article-content space-y-6 text-gray-700 dark:text-dark-text leading-relaxed">
                    <p className="text-sm text-gray-500 dark:text-dark-muted">시행일: 2026년 2월 26일</p>

                    <h2>제1조 (목적)</h2>
                    <p>본 약관은 "데일리 재테크 픽"(이하 "사이트")이 제공하는 금융 정보 서비스의 이용 조건 및 절차, 사이트 운영자와 이용자의 권리·의무에 관한 사항을 규정함을 목적으로 합니다.</p>

                    <h2>제2조 (서비스의 내용)</h2>
                    <p>본 사이트는 다음과 같은 서비스를 무료로 제공합니다:</p>
                    <ul>
                        <li>한국 증시, 미국 증시, 한국 부동산, 코인, 재테크 가이드 등 금융 인사이트 기사</li>
                        <li>AI 기반으로 분석·가공된 투자 참고용 정보</li>
                        <li>관련 최신 뉴스 큐레이션</li>
                    </ul>

                    <h2>제3조 (면책 조항 — 투자 관련)</h2>
                    <p><strong>본 사이트에서 제공하는 모든 정보는 투자 참고용이며, 어떠한 경우에도 특정 자산의 매수·매도를 권유하지 않습니다.</strong></p>
                    <ul>
                        <li>투자의 최종 결정과 그에 따른 손익의 책임은 전적으로 이용자 본인에게 있습니다.</li>
                        <li>본 사이트의 정보를 기반으로 한 투자 손실에 대해 사이트 운영자는 법적 책임을 지지 않습니다.</li>
                        <li>실제 투자 전 반드시 전문 투자 상담사와 상의하시기 바랍니다.</li>
                    </ul>

                    <h2>제4조 (저작권)</h2>
                    <p>본 사이트의 콘텐츠(기사, 이미지, 디자인 등)에 대한 저작권은 "데일리 재테크 픽"에 있으며, 사전 서면 동의 없이 무단 복제·배포·전송할 수 없습니다.</p>

                    <h2>제5조 (이용자의 의무)</h2>
                    <ul>
                        <li>이용자는 본 사이트의 정보를 상업적 목적으로 무단 사용할 수 없습니다.</li>
                        <li>사이트의 정상적인 운영을 방해하는 행위를 해서는 안 됩니다.</li>
                        <li>타인의 명예를 훼손하거나 법률에 위반되는 행위를 해서는 안 됩니다.</li>
                    </ul>

                    <h2>제6조 (광고 게재)</h2>
                    <p>본 사이트는 Google AdSense를 포함한 제3자 광고 네트워크를 통해 광고를 게재할 수 있습니다. 광고의 내용은 광고주의 책임 하에 제공되며, 사이트 운영자는 광고 내용에 대한 책임을 지지 않습니다.</p>

                    <h2>제7조 (서비스의 변경 및 중단)</h2>
                    <p>사이트 운영자는 운영상·기술상의 이유로 서비스의 전부 또는 일부를 변경하거나 중단할 수 있습니다. 이 경우 사전에 사이트 내 공지를 통해 안내합니다.</p>

                    <h2>제8조 (약관의 변경)</h2>
                    <p>본 약관은 관련 법령에 위배되지 않는 범위에서 변경될 수 있으며, 변경 시 사이트 내 공지를 통해 고지합니다.</p>

                    <h2>제9조 (문의)</h2>
                    <p>본 약관에 관한 문의는 아래 연락처로 보내주시기 바랍니다.</p>
                    <ul>
                        <li>이메일: contact@dailyfinancepick.com</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
