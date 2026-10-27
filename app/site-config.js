// ─────────────────────────────────────────────────────────────
//  Ravion Studio — edit your details, prices and projects here.
// ─────────────────────────────────────────────────────────────

export const CONTACT = {
  whatsapp: '94773167853', // international format, no + or spaces
  whatsappDisplay: '+94 77 316 7853',
  email: 'ravionstudio1@gmail.com', // change to hello@ravionstudio.com once Zoho is set up
  location: 'Sri Lanka',
};

// Optional: an n8n (or any) webhook that answers chat messages.
// POST body: { message, lang, history }  →  response JSON: { reply }
// Leave empty to use the built-in demo answers.
export const CHAT_WEBHOOK = process.env.NEXT_PUBLIC_CHAT_WEBHOOK || '';

// Optional: an n8n webhook that receives the contact form.
// Leave empty and the form opens WhatsApp with the message filled in.
export const CONTACT_WEBHOOK = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK || '';

// Prices. Change these to your real prices.
export const PLANS = [
  { id: 'starter', label: 'Starter website', lkr: 35000, usd: 149, featured: false },
  { id: 'business', label: 'Business website + bookings', lkr: 75000, usd: 349, featured: true },
  { id: 'ai', label: 'AI assistant pro (website + bookings + WhatsApp AI assistant)', lkr: 150000, usd: 749, featured: false },
];

export const CARE_PLAN = { lkr: 5000, usd: 29 };

// Quote builder items. `base` is always included. `per: 'per page'` items use a counter.
export const QUOTE_ITEMS = [
  { id: 'site', base: true, label: 'Website up to 5 pages', lkr: 35000, usd: 149 },
  { id: 'pages', label: 'Extra page', per: 'per page', lkr: 3000, usd: 12, max: 15 },
  { id: 'booking', label: 'Online booking system', lkr: 40000, usd: 200 },
  { id: 'ai', label: 'WhatsApp AI assistant', lkr: 75000, usd: 400 },
  { id: 'orders', label: 'Online ordering form', lkr: 30000, usd: 150 },
  { id: 'brand', label: 'Logo and brand kit', lkr: 12000, usd: 60 },
  { id: 'auto', label: 'Automation (leads to Google Sheet + alerts)', lkr: 15000, usd: 80 },
];

// Your real work. `kind`: 'concept' (your own demo site) or 'client'.
// Add `image: '/work/kandara.jpg'` after putting a screenshot in public/work/.
export const PROJECTS = [
  { name: 'Kandara', url: 'https://kendara.vercel.app', kind: 'concept', tone: '#2F5D3A', type: { en: 'Ceylon tea brand', si: 'ලංකා තේ brand එකක්' } },
  { name: 'KAIRO', url: 'https://kairo-gamma-topaz.vercel.app', kind: 'concept', tone: '#1D1D24', type: { en: 'Smart ring product launch', si: 'Smart ring product එකක්' } },
  { name: 'Forno Nove', url: 'https://fornonove.vercel.app', kind: 'concept', tone: '#9C2F1F', type: { en: 'Pizza ordering', si: 'Pizza order කරන site එකක්' } },
  { name: 'Serenvia', url: 'https://serenvia-nu.vercel.app', kind: 'concept', tone: '#1F6E78', type: { en: 'Sri Lanka travel guide by budget', si: 'Budget එකට ලංකාවේ සංචාරක ස්ථාන' } },
  { name: 'Hillforge', url: 'https://hillforge.vercel.app', kind: 'concept', tone: '#3B3B3B', type: { en: 'Gym', si: 'Gym එකක්' } },
  { name: 'Mistleaf', url: 'https://mistleaf.vercel.app', kind: 'concept', tone: '#6B7F5A', type: { en: 'Café', si: 'Café එකක්' } },
  { name: 'Southpeak', url: 'https://southpeak-mu.vercel.app', kind: 'concept', tone: '#2C4A6B', type: { en: 'Car hire, Queenstown NZ', si: 'Car hire, Queenstown NZ' } },
  { name: 'Dunemark', url: 'https://dunemark.vercel.app', kind: 'concept', tone: '#8A6A3C', type: { en: 'Dubai real estate', si: 'Dubai real estate' } },
  { name: 'FluentPath', url: 'https://fluentpath-pro.vercel.app', kind: 'concept', tone: '#3A4FB0', type: { en: 'English learning app', si: 'English ඉගෙනගන්න app එකක්' } },
];
