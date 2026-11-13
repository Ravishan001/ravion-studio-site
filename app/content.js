// All page text in English (en) and Sinhala (si).
// Solution names, prices and estimator items live in site-config.js.

export const T = {
  en: {
    nav: { solutions: 'Solutions', work: 'Work', pricing: 'Pricing', estimate: 'Estimate', faq: 'FAQ', contact: 'Contact' },
    langLabel: 'සිංහල',
    langAria: 'Switch to Sinhala',
    cta: 'Get a quote',
    menu: 'Menu',

    hero: {
      title: 'Software built around how your business actually works.',
      sub: 'Ravion Studio is a software company in Sri Lanka. We design and build management systems, POS, mobile apps, websites and AI agents for businesses here and abroad.',
      primary: 'Estimate my project',
      secondary: 'Talk on WhatsApp',
      points: ['You own the code and the data', 'Works on phone, tablet and PC', 'Sinhala and English'],
      tabsLabel: 'Examples of systems we build',
      paused: 'Paused',
    },

    demoScreens: {
      pos: 'POS',
      inventory: 'Inventory',
      bookings: 'Bookings',
      staff: 'Staff',
      ai: 'AI agent',
      website: 'Websites',
    },

    strip: 'One team for',
    stripItems: ['Management systems', 'POS', 'Mobile apps', 'Websites', 'Online stores', 'AI agents', 'Automations', 'Database systems'],

    solutions: {
      title: 'What we build',
      sub: 'From a single website to software that runs every branch. Pick a starting point, and we shape it to your business.',
      from: 'from',
      estimate: 'Estimate this',
      seePricing: 'See plans',
      productTag: 'Our product',
      productCta: 'Open NopeQ',
    },

    industries: {
      title: 'Built for your kind of business',
      sub: 'Choose your industry to see what businesses like yours usually ask us for.',
      usually: 'What we usually build',
      cta: 'Estimate this setup',
    },

    demo: {
      title: 'See an AI agent book a customer',
      sub: 'What your customers see on WhatsApp, and what happens in your systems while it replies.',
      shop: 'Glow Salon',
      shopNote: 'demo',
      online: 'online',
      play: 'Play demo',
      replay: 'Play again',
      behind: 'Behind the scenes',
      waiting: 'Press play to start the conversation.',
      script: [
        { who: 'c', text: 'Hi, do you have a haircut slot tomorrow evening?' },
        { who: 'b', text: 'Hi! Tomorrow evening we have 4:30 pm and 6:00 pm free. Which one suits you?', log: 'Checked the booking calendar: 2 free slots' },
        { who: 'c', text: '6 pm. How much is it?' },
        { who: 'b', text: "A men's haircut is Rs. 1,500 and takes about 45 minutes. Shall I book 6:00 pm tomorrow?", log: 'Found the price in the salon price list' },
        { who: 'c', text: 'Yes please' },
        { who: 'b', text: "Done. You're booked for 6:00 pm tomorrow at Glow Salon. I'll send a reminder 2 hours before.", log: 'Booked 6:00 pm and saved the customer to the system' },
      ],
      last: 'Sent the owner a WhatsApp alert about the new booking',
      stat: 'Every reply in under 5 seconds, at any hour.',
    },

    work: {
      title: 'Our work',
      systems: 'Systems and products',
      websites: 'Websites',
      websitesSub: 'Concept sites made to show what your business could have. Every one is live, so open it on your phone.',
      concept: 'Concept site',
      client: 'Client project',
      live: 'Live',
      building: 'In progress',
      open: 'Open live site',
      openProduct: 'Open',
    },

    pricing: {
      title: 'Plans and starting prices',
      sub: 'Every project is quoted after a free call. These are honest starting points so you know where you stand.',
      lkr: 'LKR',
      usd: 'USD',
      currency: 'Currency',
      from: 'from',
      featured: 'Most chosen',
      cta: 'Ask about this plan',
      care: 'Hosting, updates and support',
      perMonth: '/ month',
      payment: 'Payment: 50% to start and 50% on launch. Larger projects are split into milestones.',
    },

    estimator: {
      title: 'Estimate your project',
      sub: 'Choose what you need. The price and timeline update as you go.',
      step1: 'What are we building?',
      step2: 'Features',
      step3: 'Size',
      step4: 'Where it runs',
      step5: 'Extras',
      users: 'People using it',
      branches: 'Branches or locations',
      included: 'Included',
      result: 'Estimated price',
      timeline: 'Estimated timeline',
      weeks: 'weeks',
      monthly: 'Hosting & care from',
      yourSetup: 'Your setup',
      noFeatures: 'Core system only',
      send: 'Send this estimate on WhatsApp',
      note: 'A starting estimate from your choices. The exact quote comes after a free call.',
      msgIntro: 'Hi Ravion Studio, I made an estimate on your website:',
    },

    process: {
      title: 'How a project runs',
      steps: [
        { name: 'Discovery call', text: 'A free call about your business, the problems to solve and who will use the system.' },
        { name: 'Design & prototype', text: 'You click through screens of your system before any code is written, and ask for changes.' },
        { name: 'Build in short sprints', text: 'We build in weekly steps and show you working progress each week.' },
        { name: 'Launch & training', text: 'We move your data in, set it up on your devices and train your team.' },
        { name: 'Support & growth', text: 'Hosting, backups, fixes and new features as your business grows.' },
      ],
    },

    why: {
      title: 'Built properly, made to last',
      items: [
        { icon: 'key', name: 'You own it', text: 'The code, the data and the domain are yours. No lock-in.' },
        { icon: 'shield', name: 'Secure by default', text: 'Logins with roles, encrypted connections and daily backups.' },
        { icon: 'devices', name: 'Every device', text: 'Phone, tablet, laptop and desktop, with offline mode where it matters.' },
        { icon: 'lang', name: 'Sinhala and English', text: 'Your staff and customers use it in the language they prefer.' },
        { icon: 'eye', name: 'You see progress', text: 'Weekly demos, so there are no surprises at the end.' },
        { icon: 'chat', name: 'Local support', text: 'Talk to the person who built it, on WhatsApp.' },
      ],
    },

    faq: {
      title: 'Questions people ask',
      items: [
        { q: 'Do I own the software you build?', a: 'Yes. You own the code, your data and your domain. We can hand everything over whenever you want.' },
        { q: 'Does it run online or on our own computers?', a: 'Most systems run online so you can use them from anywhere on phone, tablet or PC. POS and other systems can also work offline and sync when the internet returns.' },
        { q: 'Can you move our data from Excel or an old system?', a: 'Yes. We import customers, products, staff and past records so you start with your real data.' },
        { q: 'How long does a project take?', a: 'A website takes about 1–2 weeks. A management system or POS usually takes 4–10 weeks, and mobile apps 6–14 weeks, depending on features.' },
        { q: 'How do payments work?', a: 'Usually 50% to start and 50% on launch. Larger projects are split into milestones. Bank transfer in Sri Lanka, international transfer from abroad.' },
        { q: 'What happens after launch?', a: 'The monthly care plan covers hosting, backups, security updates, fixes and small changes. New features are quoted separately.' },
        { q: 'Will the AI agent say wrong things to customers?', a: 'It only answers from information you approve, such as prices, hours and services. When it is not sure, it passes the chat to you.' },
        { q: 'Do you work with businesses outside Sri Lanka?', a: 'Yes. We work with clients abroad in USD over WhatsApp, email and video calls.' },
      ],
    },

    contact: {
      title: 'Tell us what you need',
      sub: 'We reply within a day, usually on WhatsApp.',
      name: 'Your name',
      business: 'Business name and type',
      phone: 'WhatsApp number',
      need: 'What do you need?',
      needAny: 'Not sure yet',
      message: 'Tell us a little about it',
      submit: 'Send message',
      sending: 'Sending…',
      sent: 'Message sent. We will reply on WhatsApp soon.',
      opened: 'WhatsApp opened with your message. Press send there to reach us.',
      error: 'The message did not send. Check your connection, or message us on WhatsApp.',
      required: 'Add your name and a short message so we can reply.',
      orReach: 'Or reach us directly',
    },

    chat: {
      launcher: 'Ask Ravion',
      title: 'Ask Ravion',
      status: 'AI assistant, replies instantly',
      close: 'Close chat',
      greeting: 'Hi! I can help you choose the right system, website or AI agent and give you starting prices. What does your business do?',
      placeholder: 'Ask about systems, prices, timelines…',
      send: 'Send',
      suggestions: ['How much is a POS system?', 'Can you build a staff attendance app?', 'How long does a website take?'],
      thinking: 'Typing…',
      handoff: 'Continue on WhatsApp',
      waIntro: 'Hi Ravion Studio! I was chatting with the assistant on your website. Ref: {ref}',
      privacy: 'We keep this chat so we can pick up where you left off on WhatsApp.',
    },

    footer: {
      line: 'Software, apps, websites and AI agents for businesses.',
      rights: 'Ravion Studio',
      privacy: 'Privacy policy',
    },
  },

  si: {
    nav: { solutions: 'සේවා', work: 'වැඩ', pricing: 'මිල', estimate: 'Estimate', faq: 'ප්‍රශ්න', contact: 'සම්බන්ධ වෙන්න' },
    langLabel: 'English',
    langAria: 'Switch to English',
    cta: 'Quote එකක් ගන්න',
    menu: 'Menu',

    hero: {
      title: 'ඔයාගේ business එක වැඩ කරන විදිහටම හදපු software.',
      sub: 'Ravion Studio ලංකාවේ software company එකක්. අපි ලංකාවේ සහ පිටරට businesses වලට management systems, POS, mobile apps, websites සහ AI agents design කරලා හදනවා.',
      primary: 'මගේ project එකට estimate එකක්',
      secondary: 'WhatsApp එකෙන් කතා කරන්න',
      points: ['Code එකයි data එකයි ඔයාගේ', 'Phone, tablet, PC ඔක්කොගෙම වැඩ', 'සිංහල සහ English'],
      tabsLabel: 'අපි හදන systems වල උදාහරණ',
      paused: 'Pause කළා',
    },

    demoScreens: {
      pos: 'POS',
      inventory: 'Inventory',
      bookings: 'Bookings',
      staff: 'Staff',
      ai: 'AI agent',
      website: 'Websites',
    },

    strip: 'එකම team එකකින්',
    stripItems: ['Management systems', 'POS', 'Mobile apps', 'Websites', 'Online stores', 'AI agents', 'Automations', 'Database systems'],

    solutions: {
      title: 'අපි හදන දේවල්',
      sub: 'එක website එකක ඉඳන් හැම branch එකක්ම run කරන software දක්වා. පටන් ගන්න තැනක් තෝරන්න, අපි ඒක ඔයාගේ business එකට හදනවා.',
      from: 'සිට',
      estimate: 'Estimate කරන්න',
      seePricing: 'Plans බලන්න',
      productTag: 'අපේ product එක',
      productCta: 'NopeQ open කරන්න',
    },

    industries: {
      title: 'ඔයාගේ වගේ business එකකට',
      sub: 'ඔයාගේ industry එක තෝරලා, ඒ වගේ businesses අපෙන් සාමාන්‍යයෙන් ඉල්ලන දේවල් බලන්න.',
      usually: 'අපි සාමාන්‍යයෙන් හදන්නේ',
      cta: 'මේ setup එක estimate කරන්න',
    },

    demo: {
      title: 'AI agent කෙනෙක් customer කෙනෙක්ව book කරන හැටි බලන්න',
      sub: 'ඔයාගේ customers ලාට WhatsApp එකේ පේන දේ, සහ ඒ reply කරන අතරේ ඔයාගේ systems වල වෙන දේ.',
      shop: 'Glow Salon',
      shopNote: 'demo',
      online: 'online',
      play: 'Demo එක play කරන්න',
      replay: 'ආයේ play කරන්න',
      behind: 'පිටිපස්සේ වෙන දේ',
      waiting: 'Conversation එක පටන් ගන්න play ඔබන්න.',
      script: [
        { who: 'c', text: 'හෙට හවස haircut එකකට වෙලාවක් තියෙනවද?' },
        { who: 'b', text: 'ආයුබෝවන්! හෙට හවස 4:30ට සහ 6:00ට free. මොකද්ද ඔයාට හොඳ?', log: 'Booking calendar එක බැලුවා: free slots 2යි' },
        { who: 'c', text: '6ට. කීයද?' },
        { who: 'b', text: 'Men’s haircut එකක් Rs. 1,500යි, විනාඩි 45ක් වගේ යනවා. හෙට 6:00ට book කරන්නද?', log: 'Salon price list එකෙන් මිල හොයාගත්තා' },
        { who: 'c', text: 'ඔව් කරන්න' },
        { who: 'b', text: 'හරි! හෙට 6:00ට Glow Salon එකේ ඔයාව book කළා. පැය 2කට කලින් reminder එකක් එවන්නම්.', log: '6:00ට book කරලා customer ව system එකට save කළා' },
      ],
      last: 'අලුත් booking එක ගැන owner ට WhatsApp alert එකක් යැව්වා',
      stat: 'ඕනම වෙලාවක, හැම reply එකක්ම තත්පර 5කට අඩු කාලයකින්.',
    },

    work: {
      title: 'අපේ වැඩ',
      systems: 'Systems සහ products',
      websites: 'Websites',
      websitesSub: 'ඔයාගේ business එකට තියෙන්න පුළුවන් දේ පෙන්නන්න හදපු concept sites. ඔක්කොම live, phone එකෙන් open කරලා බලන්න.',
      concept: 'Concept site',
      client: 'Client project',
      live: 'Live',
      building: 'හදමින් පවතී',
      open: 'Live site එක බලන්න',
      openProduct: 'Open කරන්න',
    },

    pricing: {
      title: 'Plans සහ ආරම්භක මිල',
      sub: 'හැම project එකකටම free call එකකින් පස්සේ quote එකක් දෙනවා. ඔයාට අදහසක් ගන්න මේ අවංක ආරම්භක මිල.',
      lkr: 'LKR',
      usd: 'USD',
      currency: 'Currency',
      from: 'සිට',
      featured: 'වැඩියෙන්ම තෝරන',
      cta: 'මේ plan එක ගැන අහන්න',
      care: 'Hosting, updates සහ support',
      perMonth: '/ මාසෙකට',
      payment: 'Payment: පටන් ගන්න කලින් 50%, launch එකේදී 50%. ලොකු projects milestones වලට බෙදනවා.',
    },

    estimator: {
      title: 'ඔයාගේ project එක estimate කරන්න',
      sub: 'ඕන දේවල් තෝරන්න. මිලයි කාලයයි ඉබේම update වෙනවා.',
      step1: 'මොකද්ද හදන්නේ?',
      step2: 'Features',
      step3: 'ප්‍රමාණය',
      step4: 'වැඩ කරන්නේ කොහෙද',
      step5: 'Extras',
      users: 'පාවිච්චි කරන අය',
      branches: 'Branches හරි locations',
      included: 'ඇතුළත්',
      result: 'ඇස්තමේන්තුගත මිල',
      timeline: 'ඇස්තමේන්තුගත කාලය',
      weeks: 'සති',
      monthly: 'Hosting සහ care',
      yourSetup: 'ඔයාගේ setup එක',
      noFeatures: 'Core system එක විතරක්',
      send: 'මේ estimate එක WhatsApp එකෙන් යවන්න',
      note: 'ඔයා තේරුව දේවල් වලින් හදපු ආරම්භක ඇස්තමේන්තුවක්. Free call එකකින් පස්සේ හරියටම quote එක දෙනවා.',
      msgIntro: 'ආයුබෝවන් Ravion Studio, ඔයාලගේ website එකේ මම estimate එකක් හැදුවා:',
    },

    process: {
      title: 'Project එකක් යන විදිහ',
      steps: [
        { name: 'Discovery call', text: 'ඔයාගේ business එක, විසඳන්න ඕන ප්‍රශ්න, system එක පාවිච්චි කරන අය ගැන free call එකක්.' },
        { name: 'Design සහ prototype', text: 'Code ලියන්න කලින් ඔයාගේ system එකේ screens click කරලා බලලා වෙනස්කම් ඉල්ලන්න පුළුවන්.' },
        { name: 'පොඩි sprints වලින් හදනවා', text: 'සතියෙන් සතිය හදලා, හැම සතියකම වැඩ කරන progress එක පෙන්නනවා.' },
        { name: 'Launch සහ training', text: 'ඔයාගේ data ඇතුළට දාලා, devices වල setup කරලා, team එකට උගන්නනවා.' },
        { name: 'Support සහ growth', text: 'Hosting, backups, fixes, business එක ලොකු වෙනකොට අලුත් features.' },
      ],
    },

    why: {
      title: 'හරියට හදපු, කල් පවතින software',
      items: [
        { icon: 'key', name: 'ඔයාගේම දේ', text: 'Code එක, data, domain ඔක්කොම ඔයාගේ. Lock-in නෑ.' },
        { icon: 'shield', name: 'ආරක්ෂිතයි', text: 'Roles එක්ක logins, encrypted connections, දිනපතා backups.' },
        { icon: 'devices', name: 'හැම device එකකම', text: 'Phone, tablet, laptop, desktop. අවශ්‍ය තැන්වල offline mode.' },
        { icon: 'lang', name: 'සිංහල සහ English', text: 'Staff ලාටයි customers ලාටයි කැමති භාෂාවෙන් පාවිච්චි කරන්න පුළුවන්.' },
        { icon: 'eye', name: 'Progress එක පේනවා', text: 'හැම සතියකම demo එකක්, අන්තිමට surprises නෑ.' },
        { icon: 'chat', name: 'Local support', text: 'හදපු කෙනා එක්කම WhatsApp එකෙන් කතා කරන්න.' },
      ],
    },

    faq: {
      title: 'නිතර අහන ප්‍රශ්න',
      items: [
        { q: 'අපි හදන software එක ඔයාගේ වෙනවද?', a: 'ඔව්. Code එක, data, domain ඔක්කොම ඔයාගේ. ඕන වෙලාවක ඔක්කොම handover කරනවා.' },
        { q: 'Online ද run වෙන්නේ, නැත්නම් අපේ computers වලද?', a: 'ගොඩක් systems online run වෙනවා, ඒ නිසා phone, tablet, PC එකකින් ඕන තැනක ඉඳන් පාවිච්චි කරන්න පුළුවන්. POS වගේ systems offline වැඩ කරලා internet ආවම sync වෙනවා.' },
        { q: 'Excel හරි පරණ system එකක තියෙන data ගේන්න පුළුවන්ද?', a: 'ඔව්. Customers, products, staff, පරණ records import කරනවා. ඔයා පටන් ගන්නේ ඔයාගේ ඇත්ත data එක්කම.' },
        { q: 'Project එකකට කොච්චර කාලයක් යනවද?', a: 'Website එකකට සති 1–2ක් වගේ. Management system එකකට හරි POS එකකට සති 4–10ක්, mobile apps වලට සති 6–14ක්, features අනුව.' },
        { q: 'ගෙවන්නේ කොහොමද?', a: 'සාමාන්‍යයෙන් පටන් ගන්න කලින් 50%, launch එකේදී 50%. ලොකු projects milestones වලට බෙදනවා. ලංකාවේ bank transfer, පිටරට international transfer.' },
        { q: 'Launch එකෙන් පස්සේ මොකද වෙන්නේ?', a: 'මාසික care plan එකෙන් hosting, backups, security updates, fixes සහ පොඩි වෙනස්කම් කරනවා. අලුත් features වලට වෙනම quote එකක්.' },
        { q: 'AI agent එක customers ලාට වැරදි දේවල් කියයිද?', a: 'ඔයා approve කරපු මිල, වෙලාවල්, services වගේ තොරතුරු වලින් විතරයි උත්තර දෙන්නේ. විශ්වාස නැති වෙලාවට chat එක ඔයාට දෙනවා.' },
        { q: 'ලංකාවෙන් පිට businesses එක්කත් වැඩ කරනවද?', a: 'ඔව්. පිටරට clients ලා එක්ක USD වලින්, WhatsApp, email සහ video calls හරහා වැඩ කරනවා.' },
      ],
    },

    contact: {
      title: 'ඔයාට ඕන දේ කියන්න',
      sub: 'දවසක් ඇතුළත, සාමාන්‍යයෙන් WhatsApp එකෙන් reply කරනවා.',
      name: 'ඔයාගේ නම',
      business: 'Business එකේ නම සහ වර්ගය',
      phone: 'WhatsApp number එක',
      need: 'ඔයාට ඕන මොකද්ද?',
      needAny: 'තවම විශ්වාස නෑ',
      message: 'ඒ ගැන පොඩ්ඩක් කියන්න',
      submit: 'Message එක යවන්න',
      sending: 'යවනවා…',
      sent: 'Message එක ගියා. ඉක්මනින්ම WhatsApp එකෙන් reply කරන්නම්.',
      opened: 'ඔයාගේ message එක එක්ක WhatsApp open වුණා. අපිට එන්න එතන send ඔබන්න.',
      error: 'Message එක ගියේ නෑ. Connection එක බලන්න, නැත්නම් WhatsApp කරන්න.',
      required: 'Reply කරන්න ඔයාගේ නම සහ පොඩි message එකක් දාන්න.',
      orReach: 'නැත්නම් කෙලින්ම සම්බන්ධ වෙන්න',
    },

    chat: {
      launcher: 'Ravion ගෙන් අහන්න',
      title: 'Ravion ගෙන් අහන්න',
      status: 'AI assistant, ඉක්මනින් reply කරනවා',
      close: 'Chat එක වහන්න',
      greeting: 'ආයුබෝවන්! ඔයාට ගැලපෙන system එක, website එක හරි AI agent එක තෝරගන්නයි ආරම්භක මිල කියන්නයි මට පුළුවන්. ඔයාගේ business එක මොකද්ද?',
      placeholder: 'Systems, මිල, කාලය ගැන අහන්න…',
      send: 'යවන්න',
      suggestions: ['POS system එකක් කීයද?', 'Staff attendance app එකක් හදන්න පුළුවන්ද?', 'Website එකකට කොච්චර කල් යනවද?'],
      thinking: 'Type කරනවා…',
      handoff: 'WhatsApp එකෙන් කතා කරන්න',
      waIntro: 'ආයුබෝවන් Ravion Studio! මම ඔයාලගේ website එකේ assistant එක්ක chat කළා. Ref: {ref}',
      privacy: 'WhatsApp එකේදී ඉතුරු ටික කතා කරන්න මේ chat එක අපි save කරගන්නවා.',
    },

    footer: {
      line: 'Businesses වලට software, apps, websites සහ AI agents.',
      rights: 'Ravion Studio',
      privacy: 'Privacy policy',
    },
  },
};

// Built-in answers for the chat (used when the AI is not set up or is busy).
export function demoReply(text, lang, solutions, money) {
  const t = text.toLowerCase();
  const has = (...words) => words.some((w) => t.includes(w));
  const si = lang === 'si';
  const sol = (id) => solutions.find((s) => s.id === id);
  const from = (id) => money(sol(id).tiers[0]);

  if (has('pos', 'billing', 'cashier', 'බිල්')) {
    return si
      ? `POS system එකක් shop එකකට ${from('pos')} සිට. Barcode billing, stock, receipts, reports ඔක්කොම තියෙනවා, offline වැඩ කරනවා. Counters හරි branches ගණන කීයද?`
      : `A POS system for one shop starts from ${from('pos')}, with barcode billing, stock, receipts and reports, and it works offline. How many counters or branches do you have?`;
  }
  if (has('hr', 'attendance', 'staff', 'leave', 'payroll', 'employee', 'ස්ටාෆ්', 'පඩි')) {
    return si
      ? `ඔව්, staff attendance, leave approvals, payslips තියෙන apps හදනවා. Management systems ${from('management')} සිට. Staff කී දෙනෙක් ඉන්නවද, branches කීයද?`
      : `Yes, we build staff apps with attendance, leave approvals and payslips. Management systems start from ${from('management')}. How many staff and branches do you have?`;
  }
  if (has('inventory', 'stock', 'warehouse', 'erp', 'system', 'database', 'management', 'සිස්ටම්')) {
    return si
      ? `Inventory, customers, billing, reports වගේ modules එක්ක custom management systems ${from('management')} සිට හදනවා. ඔයාගේ business එකේ දැනට වැඩ කරන්නේ කොහොමද?`
      : `We build custom management systems with modules like inventory, customers, billing and reports, from ${from('management')}. How do you run these today, on paper or in Excel?`;
  }
  if (has('app', 'android', 'iphone', 'ios', 'mobile', 'ඇප්')) {
    return si
      ? `Android සහ iPhone apps ${from('mobile')} සිට, admin panel එකත් එක්ක. App එක customers ලාටද, staff ලාටද?`
      : `Android and iPhone apps start from ${from('mobile')}, with an admin panel. Is the app for your customers or your staff?`;
  }
  if (has('bot', 'whatsapp', 'assistant', 'ai', 'chatbot', 'agent')) {
    return si
      ? `AI website assistant එකක් ${from('ai')} සිට. WhatsApp assistant එකක් ඔයාගේ number එකේ උත්තර දීලා bookings ගන්නවා. ඔයාට දවසකට messages කීයක් වගේ එනවද?`
      : `A website AI assistant starts from ${from('ai')}. A WhatsApp assistant answers on your own number and takes bookings. About how many customer messages do you get a day?`;
  }
  if (has('website', 'site', 'web', 'store', 'shop online', 'වෙබ්')) {
    return si
      ? `Starter website එකක් ${from('website')} සිට, සාමාන්‍යයෙන් සති 1–2කින්. Online store එකක් ඕනද, නැත්නම් business website එකක්ද?`
      : `A starter website is from ${from('website')} and usually takes 1–2 weeks. Do you need an online store or a business website?`;
  }
  if (has('price', 'cost', 'how much', 'කීය', 'මිල', 'ගාණ', 'ගණන')) {
    return si
      ? `Websites ${from('website')} සිට, POS ${from('pos')} සිට, management systems ${from('management')} සිට, mobile apps ${from('mobile')} සිට. පහළ තියෙන estimator එකෙන් ඔයාගේ project එකට මිල බලන්න පුළුවන්.`
      : `Websites start from ${from('website')}, POS from ${from('pos')}, management systems from ${from('management')} and mobile apps from ${from('mobile')}. The estimator on this page gives a price for your exact project.`;
  }
  if (has('long', 'time', 'days', 'weeks', 'when', 'කාල', 'දවස', 'දින', 'සති', 'කවද')) {
    return si
      ? 'Website එකකට සති 1–2ක්, POS හරි management system එකකට සති 4–10ක්, mobile apps වලට සති 6–14ක් වගේ. හැම සතියකම progress එක පෙන්නනවා.'
      : 'A website takes about 1–2 weeks, a POS or management system 4–10 weeks, and a mobile app 6–14 weeks. You see working progress every week.';
  }
  if (/^\s*(hi|hello|hey|hii|helo|ayubowan)\b/i.test(text) || has('ආයුබෝවන්', 'හායි', 'හලෝ')) {
    return si ? 'ආයුබෝවන්! ඔයාගේ business එක මොකද්ද? ඒකට ගැලපෙන system එක කියන්නම්.' : 'Hello! What kind of business do you run? I will suggest what fits.';
  }
  return si
    ? 'හොඳ ප්‍රශ්නයක්. ඒකට හරියටම උත්තර දෙන්න Ravishan ට පුළුවන්. පහළ තියෙන button එකෙන් WhatsApp එකේ අහන්න.'
    : 'Good question. Ravishan can answer that one properly. Use the button below to ask on WhatsApp.';
}
