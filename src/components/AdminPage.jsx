import React, { useState, useEffect } from 'react';
import { useNewsData } from '../App';

export default function AdminPage() {
    const { insights } = useNewsData();
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [opinions, setOpinions] = useState({});
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [editorContent, setEditorContent] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    // 저장된 전체 의견 불러오기
    useEffect(() => {
        if (isAuthenticated) {
            fetch('/api/admin/opinions')
                .then(res => res.json())
                .then(data => {
                    if (data.success) setOpinions(data.data || {});
                })
                .catch(err => console.error('Failed to load opinions:', err));
        }
    }, [isAuthenticated]);

    const handleLogin = (e) => {
        e.preventDefault();
        // 실제 API 요청 전 클라이언트 사이드 임시 통과 (이후 POST에서 최종 검증)
        // 기본 비밀번호: 1234 (process.env.ADMIN_PASSWORD 세팅 권장)
        if (password.length > 0) setIsAuthenticated(true);
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            const res = await fetch('/api/admin/opinions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    articleId: selectedArticle.id,
                    customContent: editorContent,
                    password: password
                })
            });
            const data = await res.json();
            if (data.success) {
                alert('🎉 전문가 의견이 저장되었습니다!\n사이트 하단에 즉시 렌더링됩니다.');
                setOpinions(prev => ({
                    ...prev,
                    [selectedArticle.id]: { content: editorContent, updatedAt: new Date().toISOString() }
                }));
            } else {
                alert('저장 실패: ' + (data.error || '비밀번호가 틀렸습니다.'));
                if (data.error === 'Authorization failed') setIsAuthenticated(false);
            }
        } catch (err) {
            alert('네트워크 에러가 발생했습니다.');
        } finally {
            setIsSaving(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-dark-bg flex items-center justify-center p-4">
                <form onSubmit={handleLogin} className="bg-white dark:bg-dark-card p-8 rounded-3xl shadow-xl w-full max-w-md border border-gray-100 dark:border-dark-border">
                    <div className="text-center mb-8">
                        <span className="text-4xl mb-4 block">🤖</span>
                        <h1 className="text-2xl font-black text-gray-900 dark:text-dark-text">AI 편집장 작업실</h1>
                        <p className="text-sm text-gray-500 mt-2">전문가 분석(1000자) 등록을 위해 로그인하세요</p>
                    </div>
                    <input
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent-500 mb-4"
                    />
                    <button type="submit" className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 rounded-xl transition-colors">
                        작업실 입장하기
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-bg p-4 sm:p-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 h-[calc(100vh-4rem)]">

                {/* 1. 기사 리스트 사이드바 */}
                <div className="w-full lg:w-1/3 bg-white dark:bg-dark-card rounded-3xl shadow-lg border border-gray-100 dark:border-dark-border flex flex-col overflow-hidden">
                    <div className="p-6 border-b border-gray-100 dark:border-dark-border bg-gray-50 dark:bg-dark-bg/50">
                        <h2 className="text-xl font-black text-gray-900 dark:text-dark-text flex items-center gap-2">
                            <span>📋</span> 수집된 기사 리스트
                        </h2>
                        <p className="text-xs text-gray-500 mt-1">의견을 추가할 기사를 선택하세요. (총 {insights.length}개)</p>
                    </div>
                    <div className="overflow-y-auto flex-1 p-4 space-y-3">
                        {insights.map(article => {
                            const hasOpinion = !!opinions[article.id];
                            const isSelected = selectedArticle?.id === article.id;

                            return (
                                <button
                                    key={article.id}
                                    onClick={() => {
                                        setSelectedArticle(article);
                                        setEditorContent(hasOpinion ? opinions[article.id].content : '');
                                    }}
                                    className={`w-full text-left p-4 rounded-2xl transition-all border ${isSelected ? 'bg-accent-50 dark:bg-accent-900/20 border-accent-300 dark:border-accent-700' : 'bg-white dark:bg-dark-card border-gray-100 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-bg'}`}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-bold px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                            {article.category}
                                        </span>
                                        {hasOpinion && <span className="text-xs font-bold px-2 py-1 rounded bg-emerald-100 text-emerald-700">분석 완료 ✅</span>}
                                    </div>
                                    <h3 className={`text-sm font-bold line-clamp-2 ${isSelected ? 'text-accent-700 dark:text-accent-300' : 'text-gray-900 dark:text-gray-300'}`}>
                                        {article.title}
                                    </h3>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 2. 에디터 윈도우 */}
                <div className="w-full lg:w-2/3 bg-white dark:bg-dark-card rounded-3xl shadow-lg border border-gray-100 dark:border-dark-border flex flex-col overflow-hidden">
                    {selectedArticle ? (
                        <>
                            <div className="p-6 border-b border-gray-100 dark:border-dark-border">
                                <h2 className="text-xl font-black text-gray-900 dark:text-dark-text mb-2">
                                    {selectedArticle.title}
                                </h2>
                                <a href={selectedArticle.link} target="_blank" rel="noreferrer" className="text-sm text-accent-500 hover:underline">🔗 원본 기사 확인하기</a>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                                    💡 전문가 관점 (AI Studio 1000자 내용 붙여넣기)
                                </label>
                                <textarea
                                    className="flex-1 w-full bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-gray-800 rounded-2xl p-4 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent-500 resize-none leading-relaxed"
                                    placeholder="여기에 AI가 쓴 분석글 1000자를 붙여넣어주세요. 저장을 누르면 사이트 본문 하단에 '특별 기고 / AI 심층 분석' 영역으로 예쁘게 렌더링됩니다."
                                    value={editorContent}
                                    onChange={e => setEditorContent(e.target.value)}
                                ></textarea>

                                <div className="mt-6 flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-500">현재 글자 수: {editorContent.length}자</span>
                                    <button
                                        onClick={handleSave}
                                        disabled={isSaving || editorContent.length === 0}
                                        className="px-8 py-3 bg-accent-500 hover:bg-accent-600 disabled:bg-gray-400 text-white font-bold rounded-xl transition-colors shadow-lg shadow-accent-500/30"
                                    >
                                        {isSaving ? '저장 중...' : '💾 사이트에 반영하기'}
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                            <span className="text-6xl mb-4">✍️</span>
                            <h3 className="text-xl font-black text-gray-500 dark:text-gray-400">좌측에서 기사를 선택해주세요</h3>
                            <p className="text-sm text-gray-400 mt-2">선택한 기사에 전문가 1000자 의견을 추가할 수 있습니다</p>
                        </div>
                    )}
                </div>
            </div >
        </div >
    );
}
