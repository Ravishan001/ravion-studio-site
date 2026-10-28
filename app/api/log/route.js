// Saves website chat conversations to your Google Sheet (via a Google Apps Script web app)
// and, when the visitor taps "Continue on WhatsApp", emails you the full chat.
// Visitors never see the transcript or the Sheet. They only see a short reference code.

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > 60;
}

export async function POST(req) {
  const url = process.env.CHAT_LOG_WEBHOOK;
  if (!url) return Response.json({ ok: false, reason: 'not-configured' });

  let body;
  try {
    body = await req.json();
  } catch (e) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const ip = (req.headers.get('x-forwarded-for') || 'local').split(',')[0].trim();
  if (limited(ip)) return Response.json({ ok: false }, { status: 429 });

  const ref = String(body.ref || '').slice(0, 20);
  if (!/^RV-[A-Z0-9]{4,8}$/.test(ref)) return Response.json({ ok: false }, { status: 400 });

  const messages = (Array.isArray(body.messages) ? body.messages : [])
    .slice(-40)
    .filter((m) => m && typeof m.text === 'string')
    .map((m) => ({ from: m.from === 'me' ? 'Visitor' : 'Ravion', text: m.text.slice(0, 1500) }));

  const payload = {
    secret: process.env.CHAT_LOG_SECRET || '',
    ref,
    event: body.event === 'handoff' ? 'handoff' : 'message',
    lang: body.lang === 'si' ? 'si' : 'en',
    page: String(body.page || '').slice(0, 200),
    messages,
    at: new Date().toISOString(),
  };

  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000),
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error('[log]', err.message);
    return Response.json({ ok: false });
  }
}
