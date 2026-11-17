// ─────────────────────────────────────────────────────────────
//  Ravion Studio — edit your details, prices and projects here.
//  Every price is a starting price in LKR and USD.
//  The website, the estimator and the AI assistant all read from this file.
// ─────────────────────────────────────────────────────────────

export const CONTACT = {
  whatsapp: '94773167853', // international format, no + or spaces
  whatsappDisplay: '+94 77 316 7853',
  email: 'ravionstudio1@gmail.com', // change to hello@ravionstudio.com once Zoho is set up
  location: 'Sri Lanka',
};

// Optional webhooks (see README). Leave empty to use the built-in behaviour.
export const CHAT_WEBHOOK = process.env.NEXT_PUBLIC_CHAT_WEBHOOK || '';
export const CONTACT_WEBHOOK = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK || '';

const t = (en, si) => ({ en, si });

// ── What we build ────────────────────────────────────────────
// Each solution has a short pitch, examples, pricing tiers and monthly care.
export const SOLUTIONS = [
  {
    id: 'management',
    icon: 'grid',
    name: t('Business management systems', 'Business management systems'),
    pitch: t(
      'Custom software that runs your operations: stock, customers, staff, billing and reports in one place, built around how your team works.',
      'ඔයාගේ වැඩ කරන විදිහටම හදපු software: stock, customers, staff, billing, reports ඔක්කොම එක තැනක.'
    ),
    examples: [
      t('Inventory & warehouse', 'Inventory සහ warehouse'),
      t('Customer & sales (CRM)', 'Customers සහ sales (CRM)'),
      t('Staff, attendance & leave', 'Staff, attendance සහ leave'),
      t('Billing & invoicing', 'Billing සහ invoices'),
      t('Database & records systems', 'Database සහ records systems'),
      t('Reports & dashboards', 'Reports සහ dashboards'),
    ],
    tiers: [
      {
        name: t('Essential', 'Essential'),
        lkr: 150000, usd: 650,
        items: [t('1 main module', 'ප්‍රධාන module 1ක්'), t('Up to 15 users', 'Users 15 දක්වා'), t('Web app on phone & PC', 'Phone සහ PC වල වැඩ කරන web app'), t('Roles & logins', 'Roles සහ logins'), t('Basic reports', 'Basic reports')],
      },
      {
        name: t('Business', 'Business'),
        lkr: 300000, usd: 1300, featured: true,
        items: [t('Up to 4 modules', 'Modules 4ක් දක්වා'), t('Multiple branches', 'Branches කීපයක්'), t('Installable app (PWA)', 'Install කරන්න පුළුවන් app (PWA)'), t('Custom reports & exports', 'Custom reports සහ exports'), t('Data import from Excel', 'Excel වලින් data import')],
      },
      {
        name: t('Enterprise', 'Enterprise'),
        lkr: 600000, usd: 2600,
        items: [t('Full custom ERP', 'සම්පූර්ණ custom ERP'), t('Unlimited users', 'Users සීමාවක් නෑ'), t('Integrations & APIs', 'Integrations සහ APIs'), t('Audit logs & approvals', 'Audit logs සහ approvals'), t('Priority support', 'Priority support')],
      },
    ],
    care: { lkr: 10000, usd: 45 },
  },
  {
    id: 'pos',
    icon: 'pos',
    name: t('POS systems', 'POS systems'),
    pitch: t(
      'Fast billing for shops, restaurants and pharmacies, with stock that updates itself and reports you can trust. Keeps working offline.',
      'Shops, restaurants, pharmacies වලට ඉක්මන් billing. Stock ඉබේම update වෙනවා, internet නැතත් වැඩ කරනවා.'
    ),
    examples: [t('Barcode billing & receipts', 'Barcode billing සහ receipts'), t('Stock & suppliers', 'Stock සහ suppliers'), t('Tables & kitchen orders', 'Tables සහ kitchen orders'), t('Daily sales reports', 'දවසේ sales reports')],
    tiers: [
      { name: t('Single shop', 'Shop එකකට'), lkr: 120000, usd: 520, items: [t('1 counter', 'Counter 1ක්'), t('Billing, receipts, barcode', 'Billing, receipts, barcode'), t('Stock & low-stock alerts', 'Stock සහ low-stock alerts'), t('Works offline', 'Offline වැඩ කරනවා'), t('Daily & monthly reports', 'දවසේ සහ මාසේ reports')] },
      { name: t('Multi-counter', 'Counters කීපයක්'), lkr: 220000, usd: 950, featured: true, items: [t('Up to 5 counters', 'Counters 5ක් දක්වා'), t('Staff logins & shifts', 'Staff logins සහ shifts'), t('Purchases & suppliers', 'Purchases සහ suppliers'), t('Loyalty & discounts', 'Loyalty සහ discounts'), t('Owner dashboard on phone', 'Phone එකෙන් owner dashboard')] },
      { name: t('Multi-branch', 'Branches කීපයක්'), lkr: 380000, usd: 1650, items: [t('Central stock for all branches', 'හැම branch එකටම එක stock එකක්'), t('Stock transfers', 'Stock transfers'), t('Branch comparison reports', 'Branch අතර reports'), t('Accounting exports', 'Accounting exports'), t('Priority support', 'Priority support')] },
    ],
    care: { lkr: 6000, usd: 29 },
  },
  {
    id: 'mobile',
    icon: 'phone',
    name: t('Mobile apps', 'Mobile apps'),
    pitch: t(
      'Android and iPhone apps for your customers or your team, from one codebase, with an admin panel to manage everything.',
      'Customers ලාට හරි staff එකට හරි Android සහ iPhone apps, හැමදේම manage කරන admin panel එකක් එක්ක.'
    ),
    examples: [t('Customer apps & loyalty', 'Customer apps සහ loyalty'), t('Staff & field apps', 'Staff සහ field apps'), t('Booking & ordering apps', 'Booking සහ ordering apps'), t('Admin dashboards', 'Admin dashboards')],
    tiers: [
      { name: t('Starter app', 'Starter app'), lkr: 250000, usd: 1100, items: [t('Android + iPhone', 'Android + iPhone'), t('Up to 8 screens', 'Screens 8ක් දක්වා'), t('Login & profiles', 'Login සහ profiles'), t('Admin panel', 'Admin panel'), t('Store publishing help', 'App store වලට දාන්න උදව්')] },
      { name: t('Standard app', 'Standard app'), lkr: 450000, usd: 1950, featured: true, items: [t('Up to 20 screens', 'Screens 20ක් දක්වා'), t('Push notifications', 'Push notifications'), t('Payments', 'Payments'), t('Maps & location', 'Maps සහ location'), t('Analytics', 'Analytics')] },
      { name: t('Advanced app', 'Advanced app'), lkr: 800000, usd: 3500, items: [t('Custom features & offline mode', 'Custom features සහ offline mode'), t('Real-time chat or tracking', 'Real-time chat හරි tracking'), t('Multiple user roles', 'User roles කීපයක්'), t('Integrations', 'Integrations'), t('Priority support', 'Priority support')] },
    ],
    care: { lkr: 12000, usd: 55 },
  },
  {
    id: 'website',
    icon: 'globe',
    name: t('Websites & online stores', 'Websites සහ online stores'),
    pitch: t(
      'Fast, mobile-first websites and stores that show up on Google and turn visitors into calls, bookings and orders.',
      'Phone එකේ ඉක්මනින් open වෙන, Google එකේ පේන, visitors ලා calls, bookings, orders බවට හරවන websites සහ stores.'
    ),
    examples: [t('Business websites', 'Business websites'), t('Online stores', 'Online stores'), t('Landing pages', 'Landing pages'), t('Sinhala & English sites', 'සිංහල සහ English sites')],
    tiers: [
      { name: t('Starter', 'Starter'), lkr: 35000, usd: 149, items: [t('Up to 5 pages', 'පිටු 5ක් දක්වා'), t('Mobile-first design', 'Mobile-first design'), t('WhatsApp & call buttons', 'WhatsApp සහ call buttons'), t('Google Maps & Business Profile', 'Google Maps සහ Business Profile'), t('Basic SEO', 'Basic SEO')] },
      { name: t('Business', 'Business'), lkr: 75000, usd: 349, featured: true, items: [t('Up to 12 pages', 'පිටු 12ක් දක්වා'), t('Booking or order form', 'Booking හරි order form එකක්'), t('Sinhala & English', 'සිංහල සහ English'), t('Edit text & photos yourself', 'Text සහ photos ඔයාටම edit කරන්න'), t('Leads to Google Sheets', 'Leads Google Sheets එකට')] },
      { name: t('Online store', 'Online store'), lkr: 150000, usd: 699, items: [t('Products, cart & checkout', 'Products, cart සහ checkout'), t('Card payments', 'Card payments'), t('Order & stock management', 'Orders සහ stock manage කරන්න'), t('Delivery options', 'Delivery options'), t('Sales reports', 'Sales reports')] },
    ],
    care: { lkr: 5000, usd: 29 },
  },
  {
    id: 'ai',
    icon: 'spark',
    name: t('AI agents & chatbots', 'AI agents සහ chatbots'),
    pitch: t(
      'Assistants trained on your business that answer customers, take bookings and capture leads on your website and WhatsApp, in Sinhala and English.',
      'ඔයාගේ business එක ගැන දන්න AI assistants. Website එකේ සහ WhatsApp එකේ customers ලාට උත්තර දෙනවා, bookings ගන්නවා, leads save කරනවා.'
    ),
    examples: [t('Website chat assistants', 'Website chat assistants'), t('WhatsApp assistants', 'WhatsApp assistants'), t('Internal knowledge bots', 'Staff ලාට knowledge bots'), t('Agents connected to your systems', 'ඔයාගේ systems එක්ක connect වෙන agents')],
    tiers: [
      { name: t('Website assistant', 'Website assistant'), lkr: 60000, usd: 250, items: [t('Trained on your business info', 'ඔයාගේ business info වලින් train කරලා'), t('Sinhala & English', 'සිංහල සහ English'), t('Chats saved to Google Sheets', 'Chats Google Sheets එකට save වෙනවා'), t('Hands off to WhatsApp', 'WhatsApp එකට මාරු කරනවා'), t('30 days of tuning', 'දින 30ක් tuning')] },
      { name: t('WhatsApp assistant', 'WhatsApp assistant'), lkr: 120000, usd: 520, featured: true, items: [t('On your WhatsApp number', 'ඔයාගේ WhatsApp number එකේ'), t('Answers, prices & bookings', 'උත්තර, මිල, bookings'), t('Owner alerts', 'Owner ට alerts'), t('Human takeover', 'අවශ්‍ය වෙලාවට ඔයාට chat එක'), t('Monthly report', 'මාසික report එකක්')] },
      { name: t('Custom AI agent', 'Custom AI agent'), lkr: 250000, usd: 1100, items: [t('Connected to your systems', 'ඔයාගේ systems එක්ක connect කරලා'), t('Reads & updates your data', 'Data කියවලා update කරනවා'), t('Multiple tools & workflows', 'Tools සහ workflows කීපයක්'), t('Staff or customer facing', 'Staff ට හරි customers ලාට හරි'), t('Usage dashboard', 'Usage dashboard')] },
    ],
    care: { lkr: 8000, usd: 35 },
  },
  {
    id: 'automation',
    icon: 'flow',
    name: t('Automations & integrations', 'Automations සහ integrations'),
    pitch: t(
      'Connect the tools you already use so leads, invoices, reminders and reports move on their own. Built with n8n and Google Workspace.',
      'ඔයා දැනටමත් පාවිච්චි කරන tools connect කරලා leads, invoices, reminders, reports ඉබේම යන්න හදනවා.'
    ),
    examples: [t('Leads to sheets & CRM', 'Leads sheets සහ CRM එකට'), t('Invoice & payment reminders', 'Invoice සහ payment reminders'), t('Report emails', 'Report emails'), t('System-to-system sync', 'Systems අතර sync')],
    tiers: [
      { name: t('Single workflow', 'Workflow එකක්'), lkr: 25000, usd: 100, items: [t('1 automated workflow', 'Automated workflow 1ක්'), t('Up to 3 connected tools', 'Tools 3ක් දක්වා'), t('Email or WhatsApp alerts', 'Email හරි WhatsApp alerts'), t('Setup guide', 'Setup guide එකක්')] },
      { name: t('Bundle', 'Bundle'), lkr: 60000, usd: 260, featured: true, items: [t('Up to 4 workflows', 'Workflows 4ක් දක්වා'), t('AI steps (sort, summarise, reply)', 'AI steps (sort, summarise, reply)'), t('Error alerts', 'Error alerts'), t('30 days of support', 'දින 30ක් support')] },
      { name: t('Operations suite', 'Operations suite'), lkr: 120000, usd: 520, items: [t('Up to 10 workflows', 'Workflows 10ක් දක්වා'), t('Custom APIs', 'Custom APIs'), t('Self-hosted n8n option', 'Self-hosted n8n option'), t('Monitoring', 'Monitoring'), t('Staff handover', 'Staff ට handover')] },
    ],
    care: { lkr: 4000, usd: 19 },
  },
];

// Our own booking product, shown in the solutions grid.
export const BOOKING_PRODUCT = {
  name: 'NopeQ',
  url: 'https://nopeq.com',
  text: t(
    'Our own online booking platform for salons, studios, clinics and shops. Customers book without an app, you manage every branch from your phone.',
    'අපේම online booking platform එක, salons, studios, clinics, shops වලට. Customers ලා app එකක් නැතුව book කරනවා, ඔයා හැම branch එකක්ම phone එකෙන් manage කරනවා.'
  ),
};

// ── Project estimator ───────────────────────────────────────
// base: starting price. modules: add-ons with price and extra weeks.
export const ESTIMATOR = {
  types: {
    management: {
      base: { lkr: 110000, usd: 480 }, weeks: 4, careFrom: { lkr: 10000, usd: 45 },
      modules: [
        { id: 'inventory', label: t('Inventory & stock', 'Inventory සහ stock'), lkr: 40000, usd: 175, weeks: 1 },
        { id: 'customers', label: t('Customers & sales (CRM)', 'Customers සහ sales (CRM)'), lkr: 35000, usd: 150, weeks: 1 },
        { id: 'staff', label: t('Staff, attendance & leave', 'Staff, attendance සහ leave'), lkr: 45000, usd: 195, weeks: 1.5 },
        { id: 'payroll', label: t('Payroll & payslips', 'Payroll සහ payslips'), lkr: 40000, usd: 175, weeks: 1 },
        { id: 'billing', label: t('Billing & invoices', 'Billing සහ invoices'), lkr: 35000, usd: 150, weeks: 1 },
        { id: 'purchasing', label: t('Purchasing & suppliers', 'Purchasing සහ suppliers'), lkr: 35000, usd: 150, weeks: 1 },
        { id: 'projects', label: t('Jobs, projects & tasks', 'Jobs, projects සහ tasks'), lkr: 40000, usd: 175, weeks: 1 },
        { id: 'appointments', label: t('Appointments & calendar', 'Appointments සහ calendar'), lkr: 30000, usd: 130, weeks: 1 },
        { id: 'documents', label: t('Documents & records', 'Documents සහ records'), lkr: 30000, usd: 130, weeks: 1 },
        { id: 'dashboards', label: t('Owner dashboards & reports', 'Owner dashboards සහ reports'), lkr: 30000, usd: 130, weeks: 1 },
      ],
      scaled: true,
    },
    pos: {
      base: { lkr: 100000, usd: 430 }, weeks: 3, careFrom: { lkr: 6000, usd: 29 },
      modules: [
        { id: 'barcode', label: t('Barcode scanning & label printing', 'Barcode scanning සහ label printing'), lkr: 15000, usd: 65, weeks: 0.5 },
        { id: 'tables', label: t('Tables & kitchen orders', 'Tables සහ kitchen orders'), lkr: 35000, usd: 150, weeks: 1 },
        { id: 'loyalty', label: t('Loyalty & customer accounts', 'Loyalty සහ customer accounts'), lkr: 25000, usd: 110, weeks: 0.5 },
        { id: 'suppliers', label: t('Purchases & suppliers', 'Purchases සහ suppliers'), lkr: 30000, usd: 130, weeks: 1 },
        { id: 'credit', label: t('Credit sales & cheques', 'Credit sales සහ cheques'), lkr: 25000, usd: 110, weeks: 0.5 },
        { id: 'expiry', label: t('Batches & expiry dates', 'Batches සහ expiry dates'), lkr: 25000, usd: 110, weeks: 0.5 },
        { id: 'ownerapp', label: t('Owner dashboard on phone', 'Phone එකෙන් owner dashboard'), lkr: 30000, usd: 130, weeks: 1 },
      ],
      scaled: true,
    },
    mobile: {
      base: { lkr: 220000, usd: 950 }, weeks: 6, careFrom: { lkr: 12000, usd: 55 },
      modules: [
        { id: 'accounts', label: t('User accounts & profiles', 'User accounts සහ profiles'), lkr: 30000, usd: 130, weeks: 1 },
        { id: 'payments', label: t('In-app payments', 'In-app payments'), lkr: 60000, usd: 260, weeks: 1.5 },
        { id: 'push', label: t('Push notifications', 'Push notifications'), lkr: 25000, usd: 110, weeks: 0.5 },
        { id: 'maps', label: t('Maps & live location', 'Maps සහ live location'), lkr: 50000, usd: 220, weeks: 1.5 },
        { id: 'chat', label: t('In-app chat', 'In-app chat'), lkr: 60000, usd: 260, weeks: 1.5 },
        { id: 'booking', label: t('Bookings or orders', 'Bookings හරි orders'), lkr: 50000, usd: 220, weeks: 1.5 },
        { id: 'offline', label: t('Offline mode', 'Offline mode'), lkr: 50000, usd: 220, weeks: 1.5 },
        { id: 'admin', label: t('Admin dashboard', 'Admin dashboard'), lkr: 60000, usd: 260, weeks: 1.5 },
      ],
      scaled: true,
    },
    website: {
      base: { lkr: 35000, usd: 149 }, weeks: 1, careFrom: { lkr: 5000, usd: 29 },
      modules: [
        { id: 'pages', label: t('Up to 12 pages', 'පිටු 12ක් දක්වා'), lkr: 20000, usd: 90, weeks: 0.5 },
        { id: 'booking', label: t('Booking or order form', 'Booking හරි order form එකක්'), lkr: 25000, usd: 110, weeks: 0.5 },
        { id: 'store', label: t('Online store & payments', 'Online store සහ payments'), lkr: 90000, usd: 400, weeks: 2 },
        { id: 'cms', label: t('Edit content yourself (CMS)', 'Content ඔයාටම edit කරන්න (CMS)'), lkr: 20000, usd: 90, weeks: 0.5 },
        { id: 'blog', label: t('Blog or news', 'Blog හරි news'), lkr: 12000, usd: 55, weeks: 0.5 },
        { id: 'brand', label: t('Logo & brand kit', 'Logo සහ brand kit'), lkr: 12000, usd: 60, weeks: 0.5 },
        { id: 'seo', label: t('Advanced SEO setup', 'Advanced SEO setup'), lkr: 15000, usd: 70, weeks: 0.5 },
      ],
      scaled: false,
    },
    ai: {
      base: { lkr: 60000, usd: 250 }, weeks: 2, careFrom: { lkr: 8000, usd: 35 },
      modules: [
        { id: 'whatsapp', label: t('WhatsApp assistant', 'WhatsApp assistant'), lkr: 60000, usd: 270, weeks: 1 },
        { id: 'booking', label: t('Takes bookings', 'Bookings ගන්නවා'), lkr: 30000, usd: 130, weeks: 1 },
        { id: 'leads', label: t('Leads to Google Sheets or CRM', 'Leads Google Sheets හරි CRM එකට'), lkr: 15000, usd: 65, weeks: 0.5 },
        { id: 'docs', label: t('Answers from your documents', 'ඔයාගේ documents වලින් උත්තර'), lkr: 30000, usd: 130, weeks: 1 },
        { id: 'systems', label: t('Connects to your systems', 'ඔයාගේ systems එක්ක connect වෙනවා'), lkr: 80000, usd: 350, weeks: 2 },
        { id: 'voice', label: t('Voice notes', 'Voice notes'), lkr: 35000, usd: 150, weeks: 1 },
      ],
      scaled: false,
    },
    automation: {
      base: { lkr: 25000, usd: 100 }, weeks: 1, careFrom: { lkr: 4000, usd: 19 },
      modules: [
        { id: 'leads', label: t('Leads to sheets & alerts', 'Leads sheets එකට සහ alerts'), lkr: 10000, usd: 45, weeks: 0.5 },
        { id: 'invoices', label: t('Invoices & payment reminders', 'Invoices සහ payment reminders'), lkr: 15000, usd: 65, weeks: 0.5 },
        { id: 'reports', label: t('Scheduled report emails', 'Scheduled report emails'), lkr: 12000, usd: 55, weeks: 0.5 },
        { id: 'ai', label: t('AI sorting & replies', 'AI sorting සහ replies'), lkr: 20000, usd: 90, weeks: 0.5 },
        { id: 'sync', label: t('Sync between two systems', 'Systems දෙකක් අතර sync'), lkr: 25000, usd: 110, weeks: 1 },
      ],
      scaled: false,
    },
  },
  // Multipliers for systems used by many people or branches.
  users: [
    { id: 'u10', label: t('Up to 10', '10 දක්වා'), factor: 1 },
    { id: 'u50', label: t('11 – 50', '11 – 50'), factor: 1.15 },
    { id: 'u200', label: t('51 – 200', '51 – 200'), factor: 1.35 },
    { id: 'u200p', label: t('200+', '200+'), factor: 1.6 },
  ],
  branches: [
    { id: 'b1', label: t('1', '1'), factor: 1 },
    { id: 'b3', label: t('2 – 3', '2 – 3'), factor: 1.15 },
    { id: 'b4', label: t('4+', '4+'), factor: 1.3 },
  ],
  platforms: [
    { id: 'web', label: t('Web app (phone, tablet & PC)', 'Web app (phone, tablet සහ PC)'), lkr: 0, usd: 0, included: true },
    { id: 'android', label: t('Android app', 'Android app'), lkr: 60000, usd: 260, weeks: 1 },
    { id: 'ios', label: t('iPhone app', 'iPhone app'), lkr: 70000, usd: 300, weeks: 1 },
    { id: 'desktop', label: t('Desktop app (works offline)', 'Desktop app (offline වැඩ කරනවා)'), lkr: 60000, usd: 260, weeks: 1 },
  ],
  extras: [
    { id: 'migration', label: t('Move data from Excel or old system', 'Excel හරි පරණ system එකෙන් data ගේන්න'), lkr: 20000, usd: 90, weeks: 0.5 },
    { id: 'training', label: t('Staff training', 'Staff training'), lkr: 10000, usd: 45, weeks: 0 },
    { id: 'languages', label: t('Sinhala & English', 'සිංහල සහ English'), lkr: 15000, usd: 65, weeks: 0.5 },
    { id: 'sms', label: t('SMS or WhatsApp notifications', 'SMS හරි WhatsApp notifications'), lkr: 20000, usd: 90, weeks: 0.5 },
    { id: 'gateway', label: t('Online payment gateway', 'Online payment gateway'), lkr: 30000, usd: 130, weeks: 0.5 },
    { id: 'rush', label: t('Faster delivery', 'ඉක්මනින් දෙන්න'), pct: 0.2, weeks: 0 },
  ],
};

// ── Work ────────────────────────────────────────────────────
// Systems and products. `status`: 'live' | 'building'. Leave url empty to hide the link.
export const SYSTEMS = [
  {
    id: 'nopeq',
    name: 'NopeQ',
    url: 'https://nopeq.com',
    status: 'live',
    kind: t('Our product', 'අපේ product එක'),
    what: t('Booking platform for salons, studios, clinics and shops', 'Salons, studios, clinics, shops වලට booking platform එකක්'),
    detail: t(
      'Each business gets its own booking page, staff and branch management, and an AI receptionist on the top plan.',
      'හැම business එකකටම booking page එකක්, staff සහ branch management, ඉහළම plan එකේ AI receptionist කෙනෙක්.'
    ),
    tone: '#2d2a7a',
  },
  {
    id: 'staff',
    name: t('Staff & attendance app', 'Staff සහ attendance app'),
    url: '',
    status: 'building',
    kind: t('Client project', 'Client project'),
    what: t('For a consultancy with two branches', 'Branches දෙකක් තියෙන consultancy එකකට'),
    detail: t(
      'Selfie and location check-in, leave requests with owner approval, payslips and a shared appointments calendar, on Android, iPhone and Mac.',
      'Selfie සහ location check-in, owner approve කරන leave requests, payslips සහ appointments calendar එකක්. Android, iPhone, Mac වල වැඩ.'
    ),
    tone: '#0f5c56',
  },
  {
    id: 'gym',
    name: 'RepFlint',
    url: 'https://repflint.com',
    status: 'live',
    kind: t('Our product', 'අපේ product එක'),
    what: t('Gym management app for gyms of any size', 'ඕනම gym එකකට gym management app එකක්'),
    detail: t(
      'Each gym gets its own member app with its logo and colours, and an owner dashboard for members, payments, QR check-ins, workout plans, classes and branches. Free to start.',
      'හැම gym එකකටම එයාලගේ logo සහ පාට එක්ක member app එකක්, members, payments, QR check-in, workout plans, classes සහ branches manage කරන්න owner dashboard එකක්. Free එකෙන් පටන් ගන්න පුළුවන්.'
    ),
    tone: '#7a2e12',
  },
];

// Websites. `kind`: 'concept' (our demo site) or 'client'. Screenshots live in public/work/.
export const PROJECTS = [
  { name: 'Kandara', url: 'https://kendara.vercel.app', kind: 'concept', tone: '#2F5D3A', type: t('Ceylon tea brand', 'ලංකා තේ brand එකක්') },
  { name: 'KAIRO', url: 'https://kairo-gamma-topaz.vercel.app', kind: 'concept', tone: '#1D1D24', type: t('Smart ring product launch', 'Smart ring product එකක්') },
  { name: 'Forno Nove', url: 'https://fornonove.vercel.app', kind: 'concept', tone: '#9C2F1F', type: t('Pizza ordering', 'Pizza order කරන site එකක්') },
  { name: 'Serenvia', url: 'https://serenvia-nu.vercel.app', kind: 'concept', tone: '#1F6E78', type: t('Sri Lanka travel guide by budget', 'Budget එකට ලංකාවේ සංචාරක ස්ථාන') },
  { name: 'Hillforge', url: 'https://hillforge.vercel.app', kind: 'concept', tone: '#3B3B3B', type: t('Gym', 'Gym එකක්') },
  { name: 'Mistleaf', url: 'https://mistleaf.vercel.app', kind: 'concept', tone: '#6B7F5A', type: t('Café', 'Café එකක්') },
  { name: 'Southpeak', url: 'https://southpeak-mu.vercel.app', kind: 'concept', tone: '#2C4A6B', type: t('Car hire, Queenstown NZ', 'Car hire, Queenstown NZ') },
  { name: 'Dunemark', url: 'https://dunemark.vercel.app', kind: 'concept', tone: '#8A6A3C', type: t('Dubai real estate', 'Dubai real estate') },
  { name: 'FluentPath', url: 'https://fluentpath-pro.vercel.app', kind: 'concept', tone: '#3A4FB0', type: t('English learning app', 'English ඉගෙනගන්න app එකක්') },
];

// ── Industries ──────────────────────────────────────────────
// `build`: solution ids we usually suggest. `estimate`: which estimator type to open.
export const INDUSTRIES = [
  { id: 'retail', name: t('Retail & pharmacies', 'Retail සහ pharmacies'), estimate: 'pos', modules: ['barcode', 'suppliers', 'expiry', 'ownerapp'],
    items: [t('POS with barcode billing', 'Barcode billing POS එකක්'), t('Stock, batches & expiry dates', 'Stock, batches සහ expiry dates'), t('Supplier & purchase tracking', 'Suppliers සහ purchases'), t('Sales reports on your phone', 'Phone එකෙන් sales reports')] },
  { id: 'food', name: t('Restaurants & cafés', 'Restaurants සහ cafés'), estimate: 'pos', modules: ['tables', 'loyalty', 'ownerapp'],
    items: [t('Table & kitchen order POS', 'Tables සහ kitchen orders POS'), t('Online menu & ordering website', 'Online menu සහ ordering website'), t('Loyalty for regulars', 'නිතර එන අයට loyalty'), t('WhatsApp order assistant', 'WhatsApp order assistant')] },
  { id: 'salon', name: t('Salons, spas & studios', 'Salons, spas සහ studios'), estimate: 'ai', modules: ['whatsapp', 'booking', 'leads'],
    items: [t('Online booking with NopeQ', 'NopeQ එකෙන් online booking'), t('WhatsApp booking assistant', 'WhatsApp booking assistant'), t('Staff schedules & commissions', 'Staff schedules සහ commissions'), t('Website with price list', 'Price list එක්ක website')] },
  { id: 'clinic', name: t('Clinics & healthcare', 'Clinics සහ healthcare'), estimate: 'management', modules: ['appointments', 'customers', 'documents', 'billing'],
    items: [t('Appointments & patient records', 'Appointments සහ patient records'), t('Billing & receipts', 'Billing සහ receipts'), t('SMS reminders', 'SMS reminders'), t('Doctor schedules', 'Doctor schedules')] },
  { id: 'gym', name: t('Gyms & fitness', 'Gyms සහ fitness'), estimate: 'mobile', modules: ['accounts', 'payments', 'push', 'admin'],
    items: [t('Member app & workout plans', 'Member app සහ workout plans'), t('Membership payments & renewals', 'Membership payments සහ renewals'), t('Check-in & attendance', 'Check-in සහ attendance'), t('Trainer dashboard', 'Trainer dashboard')] },
  { id: 'office', name: t('Offices & agencies', 'Offices සහ agencies'), estimate: 'management', modules: ['staff', 'payroll', 'projects', 'customers'],
    items: [t('Staff attendance & leave app', 'Staff attendance සහ leave app'), t('Client & case management', 'Clients සහ cases manage කරන්න'), t('Payroll & payslips', 'Payroll සහ payslips'), t('Document records', 'Document records')] },
  { id: 'warehouse', name: t('Wholesale & factories', 'Wholesale සහ factories'), estimate: 'management', modules: ['inventory', 'purchasing', 'billing', 'dashboards'],
    items: [t('Inventory across warehouses', 'Warehouses කීපයක inventory'), t('Purchase & sales orders', 'Purchase සහ sales orders'), t('Production & job tracking', 'Production සහ jobs track කරන්න'), t('Owner dashboards', 'Owner dashboards')] },
  { id: 'education', name: t('Tuition & education', 'Tuition සහ education'), estimate: 'management', modules: ['customers', 'billing', 'appointments', 'documents'],
    items: [t('Student & class management', 'Students සහ classes manage කරන්න'), t('Fee payments & reminders', 'Fee payments සහ reminders'), t('Learning app for students', 'Students ලාට learning app එකක්'), t('AI study assistant', 'AI study assistant')] },
];
