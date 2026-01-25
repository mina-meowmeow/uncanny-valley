import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
	process.env.SUPABASE_URL,
	process.env.SUPABASE_KEY,
);

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const body = JSON.parse(req.body);

		const { error } = await supabase.from('raw_logs').insert([
			{
				session_id: body.session_id,
				payload: body,
			},
		]);

		if (error) return res.status(500).json({ error });
		return res.status(200).json({ status: 'ok' });
	}
}
