import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    // CORS 처리
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        if (req.method === 'GET') {
            const opinions = (await kv.get('expert_opinions')) || {};
            return res.status(200).json({ success: true, data: opinions });
        }

        if (req.method === 'POST') {
            const { articleId, customContent, password } = req.body;

            // 관리자 비밀번호 검증 (실제 운영 시 Vercel 환경변수 사용 권장)
            const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '1234';
            if (password !== ADMIN_PASSWORD) {
                return res.status(401).json({ success: false, error: 'Authorization failed' });
            }

            if (!articleId || !customContent) {
                return res.status(400).json({ success: false, error: 'Missing parameters' });
            }

            // 기존 의견 가져오기
            const opinions = (await kv.get('expert_opinions')) || {};

            // 의견 추가/수정
            opinions[articleId] = {
                content: customContent,
                updatedAt: new Date().toISOString()
            };

            await kv.set('expert_opinions', opinions);
            return res.status(200).json({ success: true, message: 'Opinion saved successfully' });
        }

        return res.status(405).json({ error: 'Method not allowed' });
    } catch (err) {
        console.error('[Admin API Error]:', err);
        return res.status(500).json({ success: false, error: err.message });
    }
}
