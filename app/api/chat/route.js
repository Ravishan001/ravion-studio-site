import { buildSystemPrompt } from '../../knowledge';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Simple per-visitor limit so nobody can run up your AI bill.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 25;
const hits = new Map();

function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > MAX_PER_WINDOW;
}

function toContents(history) {
  const turns = (Array.isArray(history) ? history : [])
    .slice(-12)
    .filter((m) => m && typeof m.text === 'string' && m.text.trim())
    .map((m) => ({
      role: m.from === 'me' ? 'user' : 'model',
      parts: [{ text: m.text.slice(0, 1200) }],
    }));
  while (turns.length && turns[0].role !== 'user') turns.shift();
  return turns;
}

async function callGemini({ key, model, system, contents, thinking }) {
  const generationConfig = { temperature: 0.5, maxOutputTokens: thinking === false ? 600 : 2000 };
  if (thinking === false) generationConfig.thinkingConfig = { thinkingBudget: 0 };
  const base = process.env.GEMINI_BASE_URL || 'https://generativelanguage.googleapis.com';
  const res = await fetch(`${base}/v1beta/models/${model}:generateContent`, {
    signal: AbortSignal.timeout(15000),
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents,
      generationConfig,
    }),
  });
  if (!res.ok) {
    const err = new Error(`Gemini ${res.status}: ${(await res.text()).slice(0, 300)}`);
    err.status = res.status;
    throw err;
  }
  const data = await res.json();
  const text = (data.candidates?.[0]?.content?.parts || [])
    .map((p) => p.text || '')
    .join('')
    .trim();
  return text;
}

export async function POST(req) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) return Response.json({ reply: '', fallback: 'no-key' });

  let body;
  try {
    body = await req.json();
  } catch (e) {
    return Response.json({ reply: '', fallback: 'bad-request' }, { status: 400 });
  }

  const ip = (req.headers.get('x-forwarded-for') || 'local').split(',')[0].trim();
  if (limited(ip)) {
    return Response.json({ reply: '', fallback: 'rate-limit' }, { status: 429 });
  }

  const contents = toContents(body.history);
  if (!contents.length || contents[contents.length - 1].role !== 'user') {
    return Response.json({ reply: '', fallback: 'empty' }, { status: 400 });
  }

  // New Google AI Studio projects can use gemini-3.8-flash or gemini-3.5-flash-lite on the free tier.
  const model = process.env.GEMINI_MODEL || 'gemini-3.8-flash';
  const system = buildSystemPrompt(body.lang === 'si' ? 'si' : 'en');

  try {
    let reply = '';
    try {
      reply = await callGemini({ key, model, system, contents, thinking: false });
    } catch (e) {
      // Some models do not accept the thinking setting (400); try once without it.
      if (e.status !== 400) throw e;
      reply = await callGemini({ key, model, system, contents });
    }
    return Response.json({ reply });
  } catch (err) {
    console.error('[chat]', err.message);
    // `code` is only the HTTP status (or "timeout"), so it is safe to show and helps debugging.
    const code = err.status || (err.name === 'TimeoutError' ? 'timeout' : 'network');
    return Response.json({ reply: '', fallback: 'ai-error', code, model });
  }
}
