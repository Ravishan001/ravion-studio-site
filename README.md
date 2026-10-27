# Ravion Studio website

Next.js site for Ravion Studio: live AI chat demo, services, savings calculator, work,
process, pricing (LKR / USD), FAQ, contact form, English / Sinhala.

## Edit your details

Everything you will change lives in two files:

- `app/site-config.js`: WhatsApp number, email, prices, projects, webhooks
- `app/content.js`: all English and Sinhala text, and the demo chat answers

Project screenshots: put an image in `public/work/` (for example `kandara.jpg`)
and add `image: '/work/kandara.jpg'` to that project in `site-config.js`.

## Run it on your computer

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Put it online (Vercel)

1. Create a new GitHub repo (for example `ravion-studio-site`) and push this folder.
2. On vercel.com: Add New → Project → import the repo → Deploy. No settings needed.
3. Domain: Project → Settings → Domains → add `ravionstudio.com`, then copy the DNS
   records Vercel shows into your domain registrar's DNS settings.

## Turn on the real AI chat (Google Gemini)

1. Get a free API key at https://aistudio.google.com/apikey (free tier, limits apply).
2. On your computer: create a file `.env.local` in this folder with
   `GEMINI_API_KEY=your-key-here`, then restart `npm run dev`.
3. On Vercel: Settings → Environment Variables → add `GEMINI_API_KEY` → redeploy.
   Optional: `GEMINI_MODEL` to use another Gemini model (default `gemini-3.8-flash`; `gemini-3.5-flash-lite` is lighter and also on the free tier).

Never put the key in the code or in a `NEXT_PUBLIC_` variable.

### Train the assistant

Everything the AI knows is in `app/knowledge.js` (plus the prices and projects in
`app/site-config.js`). Add facts, rules and answers there in plain English and
redeploy. The rules for how it talks (short replies, Sinhala/English, never invent
prices) are in `buildSystemPrompt` in the same file.

Without a key (or if the AI is down), the chat uses the built-in answers in
`demoReply` inside `app/content.js`.

Optional: set `NEXT_PUBLIC_CHAT_WEBHOOK` to an n8n webhook instead, which must
return `{ "reply": "..." }`.

## Contact form to Google Sheets (optional)

Add `NEXT_PUBLIC_CONTACT_WEBHOOK` the same way (n8n Webhook → Google Sheets
→ WhatsApp / email alert). Without it, the form opens WhatsApp with the
message filled in.
