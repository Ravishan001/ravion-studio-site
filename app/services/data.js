// ─────────────────────────────────────────────────────────────
//  Service pages (ravionstudio.com/services/...).
//  Prices, plan features and add-on names come from site-config.js,
//  so a price change there updates these pages, their titles and their schema.
//  Only the page copy (intro, guides, FAQs) lives here.
// ─────────────────────────────────────────────────────────────
import { SOLUTIONS, ESTIMATOR, SYSTEMS, PROJECTS, INDUSTRIES, CONTACT } from '../site-config';

export const SITE = 'https://www.ravionstudio.com';
export const sol = (id) => SOLUTIONS.find((s) => s.id === id);
export const rs = (n) => `Rs. ${Math.round(n).toLocaleString('en-US')}`;
export const usd = (n) => `$${Math.round(n).toLocaleString('en-US')}`;
export const waLink = (text) => `https://wa.me/${CONTACT.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

const from = (id) => rs(sol(id).tiers[0].lkr);
const tierLine = (id) =>
  sol(id)
    .tiers.map((t) => `${t.name.en} from ${rs(t.lkr)}`)
    .join(', ');
const care = (id) => rs(sol(id).care.lkr);
const modules = (type) => ESTIMATOR.types[type].modules.map((m) => m.label.en);
const system = (id) => SYSTEMS.find((s) => s.id === id);
const industry = (id) => INDUSTRIES.find((i) => i.id === id);

export const SERVICES = [
  // ── Business management systems ─────────────────────────────
  {
    id: 'management',
    slug: 'business-management-system',
    short: 'Management systems',
    title: 'Business Management System Sri Lanka | Ravion Studio',
    description: `Custom business management systems in Sri Lanka for stock, staff, attendance, payroll, billing and reports. Plans from ${from(
      'management'
    )}. Sinhala & English, phone and PC.`,
    h1: 'Business management systems for Sri Lankan businesses',
    intro:
      'One system for the work you now do in books, Excel and WhatsApp groups: stock, customers, staff, attendance, payroll, billing and reports. We build it around how your team already works, and you own the code and the data.',
    highlights: ['Works on phone, tablet and PC', 'Sinhala and English', 'Move your data in from Excel', 'You own the code and data'],
    features: [
      { name: 'Inventory & warehouse', text: 'Stock levels, item movements and low-stock alerts across one or more locations.' },
      { name: 'Staff, attendance & leave', text: 'Check-ins, leave requests with approval, and a clear record for every employee.' },
      { name: 'Payroll & payslips', text: 'Salaries worked out from attendance, with payslips your staff can open on their phone.' },
      { name: 'Customers & sales (CRM)', text: 'Every customer, quote and sale in one place, with follow-ups that don’t get forgotten.' },
      { name: 'Billing & invoicing', text: 'Invoices and receipts in a few clicks, with what is paid and what is due.' },
      { name: 'Reports & dashboards', text: 'The numbers you check every day, ready on your phone instead of in a spreadsheet.' },
    ],
    guide: {
      title: 'Which plan fits your business?',
      intro:
        'Plans are set by the number of modules and users. A module is one main area of your business, such as inventory, attendance or payroll. Basic reports, roles and logins come with every plan.',
      rows: [
        { need: 'One area only, for example stock or attendance, with up to 15 users', plan: 'Essential (1 module)' },
        { need: 'Staff attendance and payroll together', plan: 'Business (2 modules)' },
        { need: 'Inventory, billing and purchasing across two branches', plan: 'Business (3 modules, multiple branches)' },
        { need: 'Up to 4 modules, or more than 15 users', plan: 'Business (we confirm on the free call)' },
        { need: 'A full ERP with no user limit, approvals, audit logs or links to other systems', plan: 'Enterprise' },
      ],
      listTitle: 'Modules you can choose',
      list: modules('management'),
    },
    industries: ['office', 'warehouse', 'clinic', 'education'],
    work: [
      { name: 'Staff & attendance app', label: 'Client project · in progress', text: system('staff').detail.en },
      { name: 'RepFlint', label: 'Our product · live', text: system('gym').detail.en, url: system('gym').url },
    ],
    faqs: [
      {
        q: 'How much does a business management system cost in Sri Lanka?',
        a: `Our plans start at ${tierLine('management')}. Monthly care (hosting, backups, updates and support) starts at ${care(
          'management'
        )}. You get the exact price after a free call about how your business works.`,
      },
      {
        q: 'What counts as a module?',
        a: 'A module is one main area of the system, such as inventory, attendance and leave, payroll, billing or customers. If you need attendance and payroll, that is two modules, so the Business plan fits. Essential covers one module.',
      },
      {
        q: 'How many users can use the system?',
        a: 'Essential covers up to 15 users. Business suits bigger teams and multiple branches, and Enterprise has no user limit. Every user gets their own login and role, so staff only see what they need.',
      },
      {
        q: 'Can we use it on our phones?',
        a: 'Yes. Every plan is a web app that works on phone, tablet and PC. The Business plan can be installed like an app (PWA). Separate Android, iPhone or offline desktop apps can be added.',
      },
      {
        q: 'Can you move our data from Excel or an old system?',
        a: 'Yes. We import your customers, products, staff and past records, so you start with your real data on day one.',
      },
      {
        q: 'How long does it take to build?',
        a: 'Most management systems take 4–10 weeks, depending on the modules. You click through the screens before we write code, and see working progress every week.',
      },
    ],
    si: {
      title: 'සිංහලෙන්',
      text: `Stock, staff, attendance, payroll, billing සහ reports එක තැනක manage කරන්න ඔයාගේ business එකට ගැලපෙන විදිහට හදන system එකක්. Phone සහ PC දෙකේම වැඩ, සිංහල සහ English. Essential plan එක (module 1ක්, users 15 දක්වා) ${from(
        'management'
      )} සිට. Attendance සහ payroll දෙකම ඕන නම් modules 2ක් නිසා Business plan එක ගැලපෙනවා.`,
    },
    wa: 'Hi Ravion Studio, I would like to know about a business management system.',
  },

  // ── POS systems ─────────────────────────────────────────────
  {
    id: 'pos',
    slug: 'pos-system',
    short: 'POS systems',
    title: `POS System Sri Lanka – From ${from('pos')} | Ravion Studio`,
    description: `POS system for shops, restaurants and pharmacies in Sri Lanka. Barcode billing, stock, receipts and reports, works offline. From ${from(
      'pos'
    )} for one counter.`,
    h1: 'POS system for shops, restaurants and pharmacies in Sri Lanka',
    intro:
      'Fast billing at the counter, stock that updates itself with every sale, and sales reports you can check from home. It keeps billing when the internet drops and syncs when it is back.',
    highlights: ['Keeps working offline', 'Barcode billing & receipts', 'Stock updates with every sale', 'Owner dashboard on your phone'],
    features: [
      { name: 'Barcode billing & receipts', text: 'Scan, bill and print a receipt in seconds, even in a busy rush.' },
      { name: 'Stock & low-stock alerts', text: 'Stock goes down with every sale, and you know what to reorder before it runs out.' },
      { name: 'Works offline', text: 'Billing continues without internet and syncs automatically when the connection returns.' },
      { name: 'Staff logins & shifts', text: 'Each cashier has a login, so every bill and every shift total is clear.' },
      { name: 'Purchases & suppliers', text: 'Record what you buy and from whom, and keep track of supplier payments.' },
      { name: 'Daily & monthly reports', text: 'Sales, best-selling items and profit, ready when you close for the day.' },
    ],
    guide: {
      title: 'Which plan fits your shop?',
      intro: 'POS plans are set by the number of billing counters and branches. Hardware is not included in any plan.',
      rows: [
        { need: 'One billing counter', plan: 'Single shop' },
        { need: '2–5 counters, staff shifts, loyalty or supplier tracking', plan: 'Multi-counter' },
        { need: 'Two or more branches sharing one stock', plan: 'Multi-branch' },
      ],
      listTitle: 'Add-ons for your type of business',
      list: modules('pos'),
    },
    industries: ['retail', 'food'],
    work: [],
    faqs: [
      {
        q: 'How much does a POS system cost in Sri Lanka?',
        a: `Our POS plans start at ${tierLine('pos')}. Monthly care starts at ${care('pos')}. You get the exact price after a free call.`,
      },
      {
        q: 'Does the POS work without internet?',
        a: 'Yes. Billing keeps working offline and everything syncs when the internet returns, so a connection problem never stops a sale.',
      },
      {
        q: 'Is hardware included?',
        a: 'No. Computers, barcode scanners and receipt printers are not included in any price. We help you choose the right ones and set them up.',
      },
      {
        q: 'Does it work for restaurants and pharmacies?',
        a: 'Yes. Restaurants can add tables and kitchen orders. Pharmacies and grocery shops can add batches and expiry dates. Credit sales, cheques and loyalty can be added too.',
      },
      {
        q: 'Can I see my sales from my phone?',
        a: 'Yes. The owner dashboard on your phone comes with the Multi-counter plan and can be added to the Single shop plan.',
      },
      {
        q: 'Can you load my product list from Excel?',
        a: 'Yes. We import your products, prices and opening stock, so you can start billing with your real items.',
      },
    ],
    si: {
      title: 'සිංහලෙන්',
      text: `Shops, restaurants සහ pharmacies වලට ඉක්මන් billing සහ ඉබේම update වෙන stock එකක් තියෙන POS system එකක්. Internet නැතත් billing කරන්න පුළුවන්. Counter එකකට ${from(
        'pos'
      )} සිට. Computers, barcode scanners, printers මිලට ඇතුළත් නැහැ, ඒත් තෝරගන්න අපි උදව් කරනවා.`,
    },
    wa: 'Hi Ravion Studio, I would like to know about a POS system.',
  },

  // ── Mobile apps ─────────────────────────────────────────────
  {
    id: 'mobile',
    slug: 'mobile-app-development',
    short: 'Mobile apps',
    title: 'Mobile App Development Sri Lanka | Ravion Studio',
    description: `Android and iPhone app development in Sri Lanka for customer, staff, booking and ordering apps, with an admin panel. Plans from ${from(
      'mobile'
    )}.`,
    h1: 'Mobile app development in Sri Lanka, for Android and iPhone',
    intro:
      'Apps for your customers or your team, built once for both Android and iPhone, with an admin panel where you manage everything. We help you publish to the App Store and Google Play.',
    highlights: ['Android + iPhone from one codebase', 'Admin panel included', 'Help publishing to the stores', 'You own the code'],
    features: [
      { name: 'Customer apps & loyalty', text: 'Let customers order, book, collect points and hear about offers.' },
      { name: 'Staff & field apps', text: 'Check-ins, tasks and reports for staff who are out of the office.' },
      { name: 'Booking & ordering', text: 'Customers book or order in a few taps, and you see it straight away.' },
      { name: 'Push notifications', text: 'Remind customers and staff at the right moment.' },
      { name: 'Payments, maps & location', text: 'In-app payments, live location and maps when your app needs them.' },
      { name: 'Admin panel', text: 'Manage users, content and orders from your browser.' },
    ],
    guide: {
      title: 'Which plan fits your app?',
      intro: 'App plans are set by the number of screens and the features you need.',
      rows: [
        { need: 'A simple app with up to 8 screens, logins and an admin panel', plan: 'Starter app' },
        { need: 'Up to 20 screens with push notifications, payments or maps', plan: 'Standard app' },
        { need: 'Offline mode, real-time chat or tracking, several user roles', plan: 'Advanced app' },
      ],
      listTitle: 'Features you can add',
      list: modules('mobile'),
    },
    industries: ['gym'],
    work: [
      { name: 'RepFlint', label: 'Our product · live', text: system('gym').detail.en, url: system('gym').url },
      { name: 'Staff & attendance app', label: 'Client project · in progress', text: system('staff').detail.en },
    ],
    faqs: [
      {
        q: 'How much does it cost to build a mobile app in Sri Lanka?',
        a: `Our app plans start at ${tierLine('mobile')}. Monthly care starts at ${care('mobile')}. You get the exact price after a free call about your app.`,
      },
      {
        q: 'Do you build for both Android and iPhone?',
        a: 'Yes. Every plan includes Android and iPhone, built from one codebase, so both apps get the same features at the same time.',
      },
      {
        q: 'Will you publish the app to the App Store and Google Play?',
        a: 'Yes, we help you publish. The store accounts are in your name, and Apple and Google charge their own developer fees.',
      },
      {
        q: 'Is there an admin panel?',
        a: 'Yes. Every plan includes an admin panel in the browser to manage users, content and orders.',
      },
      {
        q: 'How long does it take to build an app?',
        a: 'Most apps take 6–14 weeks, depending on the screens and features. You see working progress every week.',
      },
      {
        q: 'Who owns the app?',
        a: 'You do. The code, the data and the store listings are yours, and we can hand everything over whenever you want.',
      },
    ],
    si: {
      title: 'සිංහලෙන්',
      text: `Customers ලාට හරි staff එකට හරි Android සහ iPhone apps, හැමදේම manage කරන admin panel එකක් එක්ක. App Store සහ Google Play වලට දාන්නත් අපි උදව් කරනවා. Starter app එක ${from(
        'mobile'
      )} සිට.`,
    },
    wa: 'Hi Ravion Studio, I would like to build a mobile app.',
  },

  // ── Websites & online stores ────────────────────────────────
  {
    id: 'website',
    slug: 'website-design',
    short: 'Websites',
    title: `Website Design Sri Lanka – From ${from('website')} | Ravion Studio`,
    description: `Website design in Sri Lanka: fast, mobile-first business websites and online stores in Sinhala and English, with WhatsApp buttons and basic SEO. From ${from(
      'website'
    )}.`,
    h1: 'Website design in Sri Lanka that brings calls, bookings and orders',
    intro:
      'Fast, mobile-first websites and online stores for Sri Lankan businesses. Built to load quickly on a phone, show up on Google and turn visitors into WhatsApp messages, calls, bookings and orders.',
    highlights: ['Mobile-first and fast', 'WhatsApp & call buttons', 'Google Maps & Business Profile', 'Live in 1–2 weeks'],
    features: [
      { name: 'Business websites', text: 'Show what you do, your prices and your location, with clear ways to contact you.' },
      { name: 'Online stores', text: 'Products, cart, checkout and card payments, with orders and stock in one place.' },
      { name: 'Booking & order forms', text: 'Customers send a booking or order straight from the site.' },
      { name: 'Sinhala & English', text: 'One site that works in both languages for your customers.' },
      { name: 'Edit it yourself', text: 'Change text and photos without calling a developer.' },
      { name: 'Found on Google', text: 'Basic SEO, Google Maps and your Business Profile set up from the start.' },
    ],
    guide: {
      title: 'Which plan fits your website?',
      intro: 'Website plans are set by the number of pages and what the site needs to do.',
      rows: [
        { need: 'Up to 5 pages to show your business', plan: 'Starter' },
        { need: 'Up to 12 pages, a booking or order form, Sinhala and English, editing yourself', plan: 'Business' },
        { need: 'Selling products online with card payments and delivery', plan: 'Online store' },
      ],
      listTitle: 'You can also add',
      list: modules('website'),
    },
    industries: ['food', 'salon'],
    work: PROJECTS.slice(0, 6).map((p) => ({ name: p.name, label: 'Concept site', text: p.type.en, url: p.url })),
    faqs: [
      {
        q: 'How much does a website cost in Sri Lanka?',
        a: `Our website plans start at ${tierLine('website')}. Hosting, backups and updates are covered by monthly care from ${care('website')}.`,
      },
      {
        q: 'How long does it take to build a website?',
        a: 'A business website usually goes live in about 1–2 weeks. Online stores take a little longer, depending on the number of products.',
      },
      {
        q: 'Will my website show up on Google?',
        a: 'Every plan includes basic SEO and setting up Google Maps and your Business Profile. An advanced SEO setup can be added. No one can honestly promise a first-page ranking, but we build the site so Google can find and understand it.',
      },
      {
        q: 'Can I change the text and photos myself?',
        a: 'Yes. The Business plan lets you edit text and photos yourself, and it can be added to the Starter plan.',
      },
      {
        q: 'Can the website be in Sinhala and English?',
        a: 'Yes. Sinhala and English comes with the Business plan.',
      },
      {
        q: 'Can I accept card payments online?',
        a: 'Yes. The Online store plan includes products, cart, checkout, card payments, order and stock management and delivery options.',
      },
    ],
    si: {
      title: 'සිංහලෙන්',
      text: `Phone එකේ ඉක්මනින් open වෙන, Google එකේ පේන, WhatsApp සහ call buttons තියෙන websites සහ online stores. සිංහල සහ English දෙකෙන්ම හදන්න පුළුවන්. Starter website එක (පිටු 5ක් දක්වා) ${from(
        'website'
      )} සිට, සාමාන්‍යයෙන් සති 1–2කින් live.`,
    },
    wa: 'Hi Ravion Studio, I would like a website for my business.',
  },

  // ── AI agents & chatbots ────────────────────────────────────
  {
    id: 'ai',
    slug: 'ai-chatbots',
    short: 'AI chatbots',
    title: 'AI Chatbot & WhatsApp AI Agent Sri Lanka | Ravion Studio',
    description: `AI chatbots and WhatsApp AI agents for Sri Lankan businesses. Answer customers 24/7 in Sinhala and English, share prices, take bookings and capture leads. From ${from(
      'ai'
    )}.`,
    h1: 'AI chatbots and WhatsApp AI agents for Sri Lankan businesses',
    intro:
      'An assistant that knows your business and answers customers on your website and WhatsApp, day and night, in Sinhala, Singlish and English. It shares prices, takes bookings, saves leads and hands the chat to you when a person is needed.',
    highlights: ['Replies 24/7', 'Sinhala, Singlish & English', 'Only says what you approve', 'You can take over any chat'],
    features: [
      { name: 'Website chat assistants', text: 'Answer visitors on your site and send serious leads to WhatsApp.' },
      { name: 'WhatsApp assistants', text: 'Reply on your WhatsApp number with prices, answers and bookings.' },
      { name: 'Owner alerts & takeover', text: 'Get a WhatsApp alert when a customer wants a call or a quote, and step in.' },
      { name: 'Leads saved for you', text: 'Names, needs and budgets saved to Google Sheets or your CRM.' },
      { name: 'Answers from your documents', text: 'Trained on your price lists, services and policies.' },
      { name: 'Connected to your systems', text: 'Custom agents that read and update your own data.' },
    ],
    guide: {
      title: 'Which plan fits you?',
      intro: 'AI plans are set by where the assistant works and what it is allowed to do.',
      rows: [
        { need: 'A chat assistant on your website', plan: 'Website assistant' },
        { need: 'An assistant on your WhatsApp number with owner alerts and takeover', plan: 'WhatsApp assistant' },
        { need: 'An agent that reads and updates your systems and runs workflows', plan: 'Custom AI agent' },
      ],
      listTitle: 'You can also add',
      list: modules('ai'),
    },
    industries: ['salon', 'food', 'retail'],
    work: [
      {
        name: 'Ravion WhatsApp assistant',
        label: 'Live · try it',
        text: `Message ${CONTACT.whatsappDisplay} on WhatsApp. The assistant that replies, shares our prices and alerts us when you want a call is one we built.`,
        url: waLink('Hi'),
      },
      { name: 'Ask Ravion', label: 'Live on this site', text: 'The chat assistant on ravionstudio.com answers questions about our services and prices.' },
      { name: 'NopeQ AI receptionist', label: 'Our product · live', text: system('nopeq').detail.en, url: system('nopeq').url },
    ],
    faqs: [
      {
        q: 'How much does an AI chatbot cost in Sri Lanka?',
        a: `Our AI plans start at ${tierLine('ai')}. Monthly care starts at ${care(
          'ai'
        )}. AI usage costs depend on how many messages your assistant handles.`,
      },
      {
        q: 'Can the chatbot reply in Sinhala?',
        a: 'Yes. It replies in Sinhala, Singlish or English, following the language the customer uses.',
      },
      {
        q: 'Will the AI say wrong things to customers?',
        a: 'It only answers from information you approve, such as prices, hours and services. When it is not sure, it passes the chat to you.',
      },
      {
        q: 'Can I take over a chat myself?',
        a: 'Yes. The WhatsApp assistant alerts you when a customer wants a call, a quote or a discount, and pauses while you reply.',
      },
      {
        q: 'Do I need a separate WhatsApp number?',
        a: 'Usually, yes. The assistant runs on the official WhatsApp Business Platform, and a number used there can’t also be logged into the WhatsApp Business app. We set the number up for you.',
      },
      {
        q: 'Can I try one before I buy?',
        a: `Yes. Message ${CONTACT.whatsappDisplay} on WhatsApp and talk to the assistant we built for Ravion Studio.`,
      },
    ],
    si: {
      title: 'සිංහලෙන්',
      text: `ඔයාගේ business එක ගැන දන්න AI assistant කෙනෙක්. Website එකේ සහ WhatsApp එකේ customers ලාට දවසේ පැය 24ම සිංහලෙන්, Singlish වලින් සහ English වලින් උත්තර දෙනවා, මිල කියනවා, bookings ගන්නවා. Website assistant එක ${from(
        'ai'
      )} සිට. අපේ WhatsApp එකට (${CONTACT.whatsappDisplay}) message කරලා බලන්න.`,
    },
    wa: 'Hi Ravion Studio, I would like an AI chatbot for my business.',
  },
];

export const serviceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);
export const serviceById = (id) => SERVICES.find((s) => s.id === id);
export const industriesFor = (svc) => svc.industries.map(industry).filter(Boolean);
