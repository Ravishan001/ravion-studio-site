// All page text in English (en) and Sinhala (si).

export const T = {
  en: {
    nav: { services: 'Services', demo: 'Live demo', work: 'Work', pricing: 'Pricing', faq: 'FAQ', contact: 'Contact' },
    langLabel: 'සිංහල',
    langAria: 'Switch to Sinhala',
    whatsappShort: 'WhatsApp us',

    hero: {
      title: 'Your business, still answering customers at 2 am.',
      sub: 'Ravion Studio builds websites, WhatsApp AI assistants and automations for small businesses in Sri Lanka and abroad.',
      primary: 'Message us on WhatsApp',
      secondary: 'See pricing',
      proof: 'Built in Sri Lanka · Replies in Sinhala and English',
    },

    chat: {
      title: 'Ask Ravion',
      status: 'AI assistant, replies instantly',
      greeting: 'Hi! I can tell you about our websites, AI assistants and prices. What does your business do?',
      placeholder: 'Ask about prices, timelines, bots…',
      send: 'Send',
      suggestions: ['How much is a website?', 'What can a WhatsApp bot do?', 'How long does it take?'],
      thinking: 'Typing…',
      handoff: 'Continue on WhatsApp',
      waIntro: 'Hi Ravion Studio! I was chatting with the assistant on your website. Ref: {ref}',
      privacy: 'We keep this chat so we can pick up where you left off on WhatsApp.',
    },

    services: {
      title: 'What we build',
      items: [
        { name: 'Websites', what: 'Fast, mobile-first sites that show up on Google and turn visitors into WhatsApp messages and calls.', outcome: 'Ready in 5–10 days' },
        { name: 'WhatsApp AI assistants', what: 'A bot on your own number that answers questions, shares prices and takes bookings in Sinhala and English, day and night.', outcome: 'Hands off to you when a human is needed' },
        { name: 'Booking systems', what: 'Customers pick a service, staff member and time. You see every appointment in one place.', outcome: 'Fewer missed calls and double bookings' },
        { name: 'Automations', what: 'Leads, invoices and follow-ups that move between Gmail, Sheets and your other tools on their own, built with n8n.', outcome: 'Hours of copy-paste work removed' },
      ],
    },

    calc: {
      title: 'How much time would an assistant save you?',
      sub: 'Move the sliders to match your business.',
      msgs: 'Customer messages per day',
      mins: 'Minutes spent on each reply',
      share: 'Share the assistant answers on its own',
      wage: 'Hourly cost of staff time (Rs.)',
      hoursOut: 'hours saved a month',
      moneyOut: 'worth of staff time a month',
      note: 'An estimate from your numbers. Simple questions such as prices, opening hours and availability are usually the ones an assistant handles best.',
    },

    demo: {
      title: 'Watch a WhatsApp assistant book a customer',
      sub: 'What your customers see on WhatsApp, and what happens behind the scenes while it replies.',
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
        { who: 'b', text: "Done. You're booked for 6:00 pm tomorrow at Glow Salon. I'll send a reminder 2 hours before.", log: 'Booked 6:00 pm and saved the customer to Google Sheets' },
      ],
      last: 'Sent the owner a WhatsApp alert about the new booking',
      stat: 'Every reply in under 5 seconds, at any hour.',
    },

    quote: {
      title: 'Build your quote',
      sub: 'Pick what you need and see a starting price straight away.',
      type: 'Your business',
      types: ['Salon or spa', 'Restaurant or café', 'Hotel or guest house', 'Shop or online store', 'Clinic', 'Tuition or classes', 'Other'],
      included: 'Included',
      recommended: 'Popular for your business',
      items: {
        site: 'Website, up to 5 pages',
        pages: 'Extra pages',
        booking: 'Online booking system',
        ai: 'WhatsApp AI assistant',
        orders: 'Online ordering form',
        brand: 'Logo and brand kit',
        auto: 'Leads to Google Sheets with alerts',
      },
      less: 'Fewer pages',
      more: 'More pages',
      total: 'Estimated starting price',
      care: 'Optional care plan',
      send: 'Send this quote on WhatsApp',
      note: 'A starting estimate. The final price comes after a free call.',
      msgIntro: 'Hi Ravion Studio, I built a quote on your website:',
    },

    work: {
      title: 'Sites we have built',
      sub: 'Concept sites made to show what your business could have. Every one is live, so open it on your phone.',
      concept: 'Concept site',
      client: 'Client project',
      open: 'Open live site',
    },

    process: {
      title: 'How a project runs',
      steps: [
        { name: 'Talk', text: 'A free 20-minute call or WhatsApp chat about your business and what you need.' },
        { name: 'Design', text: 'You see the design before any code is written and ask for changes.' },
        { name: 'Build', text: 'We build it, connect your WhatsApp, domain and Google profile, and test it on phones.' },
        { name: 'Launch and care', text: 'It goes live. We fix issues, update content and watch that the bot keeps answering well.' },
      ],
    },

    pricing: {
      title: 'Clear starting prices',
      sub: 'A free call gets you an exact quote. Half to start, half on launch.',
      lkr: 'Rs. LKR',
      usd: 'USD',
      from: 'from',
      featured: 'Most chosen',
      cta: 'Ask about this plan',
      plans: {
        starter: { name: 'Starter website', for: 'For shops, salons and services that need to be found online.', items: ['Up to 5 pages', 'Mobile-first design', 'WhatsApp and call buttons', 'Google Maps and Business Profile setup', 'Free hosting setup'] },
        business: { name: 'Business + bookings', for: 'For businesses that take appointments or orders.', items: ['Everything in Starter', 'Online booking or order form', 'Staff and service management', 'Booking alerts on WhatsApp or email', 'Sinhala and English pages'] },
        ai: { name: 'AI assistant pro', for: 'For busy businesses that get many messages a day.', items: ['Everything in Business', 'WhatsApp AI assistant on your number', 'Trained on your prices and FAQs', 'Leads saved to a Google Sheet', '30 days of tuning after launch'] },
      },
      care: 'Care plan',
      careText: 'Hosting checks, content updates, bot tuning and fixes.',
      perMonth: '/ month',
    },

    faq: {
      title: 'Questions people ask',
      items: [
        { q: 'Do I need to know anything technical?', a: 'No. You tell us about your business and approve the design. We handle the domain, hosting, WhatsApp setup and everything else.' },
        { q: 'Will the AI assistant say wrong things to customers?', a: 'It only answers from the information you approve, such as prices, hours and services. When it is not sure, it passes the chat to you.' },
        { q: 'Can I edit the website myself later?', a: 'Yes. We can set up simple editing for text and photos, or make changes for you on the care plan.' },
        { q: 'Do you work with businesses outside Sri Lanka?', a: 'Yes. We work with clients abroad in USD over WhatsApp, email and video calls.' },
        { q: 'How do I pay?', a: 'Half before work starts and half on launch, by bank transfer in Sri Lanka or by international transfer from abroad.' },
      ],
    },

    contact: {
      title: 'Tell us about your business',
      sub: 'We reply within a day, usually on WhatsApp.',
      name: 'Your name',
      business: 'Business name and type',
      phone: 'WhatsApp number',
      message: 'What do you need?',
      submit: 'Send message',
      sending: 'Sending…',
      sent: 'Message sent. We will reply on WhatsApp soon.',
      opened: 'WhatsApp opened with your message. Press send there to reach us.',
      error: 'The message did not send. Check your connection, or message us on WhatsApp.',
      required: 'Add your name and what you need so we can reply.',
      orReach: 'Or reach us directly',
    },

    footer: {
      line: 'Websites and AI assistants for small businesses.',
      rights: 'Ravion Studio',
    },
  },

  si: {
    nav: { services: 'සේවා', demo: 'Live demo', work: 'වැඩ', pricing: 'මිල', faq: 'ප්‍රශ්න', contact: 'සම්බන්ධ වෙන්න' },
    langLabel: 'English',
    langAria: 'Switch to English',
    whatsappShort: 'WhatsApp කරන්න',

    hero: {
      title: 'රෑ 2ටත් ඔයාගේ business එක customers ලාට උත්තර දෙනවා.',
      sub: 'Ravion Studio, ලංකාවේ සහ පිටරට පොඩි businesses වලට websites, WhatsApp AI assistants සහ automations හදනවා.',
      primary: 'WhatsApp එකෙන් කතා කරන්න',
      secondary: 'මිල ගණන් බලන්න',
      proof: 'ලංකාවේ හදන්නේ · සිංහලෙන් සහ English වලින් උත්තර දෙනවා',
    },

    chat: {
      title: 'Ravion ගෙන් අහන්න',
      status: 'AI assistant, ඉක්මනින් reply කරනවා',
      greeting: 'ආයුබෝවන්! අපේ websites, AI assistants සහ මිල ගණන් ගැන කියන්න පුළුවන්. ඔයාගේ business එක මොකද්ද?',
      placeholder: 'මිල, කාලය, bots ගැන අහන්න…',
      send: 'යවන්න',
      suggestions: ['Website එකක් කීයද?', 'WhatsApp bot එකක් මොනවද කරන්නේ?', 'කොච්චර කාලයක් යනවද?'],
      thinking: 'Type කරනවා…',
      handoff: 'WhatsApp එකෙන් කතා කරන්න',
      waIntro: 'ආයුබෝවන් Ravion Studio! මම ඔයාලගේ website එකේ assistant එක්ක chat කළා. Ref: {ref}',
      privacy: 'WhatsApp එකේදී ඉතුරු ටික කතා කරන්න මේ chat එක අපි save කරගන්නවා.',
    },

    services: {
      title: 'අපි හදන දේවල්',
      items: [
        { name: 'Websites', what: 'Phone එකේ ඉක්මනින් open වෙන, Google එකේ පේන, visitors ලා WhatsApp messages සහ calls බවට හරවන websites.', outcome: 'දින 5–10කින් ready' },
        { name: 'WhatsApp AI assistants', what: 'ඔයාගේම number එකේ, රෑ දවල් දෙකේම, සිංහලෙන් සහ English වලින් ප්‍රශ්න වලට උත්තර දෙන, මිල කියන, bookings ගන්න bot එකක්.', outcome: 'මිනිහෙක් ඕන වුණාම chat එක ඔයාට දෙනවා' },
        { name: 'Booking systems', what: 'Customers ලා service එක, staff කෙනා සහ වෙලාව තෝරනවා. ඔක්කොම appointments එක තැනක පේනවා.', outcome: 'Miss වෙන calls සහ double bookings අඩුයි' },
        { name: 'Automations', what: 'Leads, invoices, follow-ups Gmail, Sheets සහ අනිත් tools අතර ඉබේම යනවා. n8n එකෙන් හදන්නේ.', outcome: 'පැය ගණන් copy-paste වැඩ නැති වෙනවා' },
      ],
    },

    calc: {
      title: 'Assistant කෙනෙක් ඔයාට කොච්චර කාලයක් ඉතුරු කරයිද?',
      sub: 'ඔයාගේ business එකට ගැලපෙන්න sliders හොලවන්න.',
      msgs: 'දවසකට එන customer messages',
      mins: 'එක reply එකකට යන මිනිත්තු',
      share: 'Assistant එක තනියම උත්තර දෙන ප්‍රමාණය',
      wage: 'Staff කෙනෙකුගේ පැයක වියදම (Rs.)',
      hoursOut: 'පැය මාසෙකට ඉතුරුයි',
      moneyOut: 'වටිනා staff කාලයක් මාසෙකට',
      note: 'ඔයාගේ සංඛ්‍යා වලින් හදපු ඇස්තමේන්තුවක්. මිල, open වෙලාවල්, available ද වගේ සරල ප්‍රශ්න තමයි assistant කෙනෙක් හොඳටම handle කරන්නේ.',
    },

    demo: {
      title: 'WhatsApp assistant කෙනෙක් customer කෙනෙක්ව book කරන හැටි බලන්න',
      sub: 'ඔයාගේ customers ලාට WhatsApp එකේ පේන දේ, සහ ඒ reply කරන අතරේ පිටිපස්සේ වෙන දේ.',
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
        { who: 'b', text: 'හරි! හෙට 6:00ට Glow Salon එකේ ඔයාව book කළා. පැය 2කට කලින් reminder එකක් එවන්නම්.', log: '6:00ට book කරලා customer ව Google Sheets එකට save කළා' },
      ],
      last: 'අලුත් booking එක ගැන owner ට WhatsApp alert එකක් යැව්වා',
      stat: 'ඕනම වෙලාවක, හැම reply එකක්ම තත්පර 5කට අඩු කාලයකින්.',
    },

    quote: {
      title: 'ඔයාගේ quote එක හදාගන්න',
      sub: 'ඕන දේවල් තෝරලා ආරම්භක මිල එකපාරටම බලන්න.',
      type: 'ඔයාගේ business එක',
      types: ['Salon හරි spa', 'Restaurant හරි café', 'Hotel හරි guest house', 'Shop හරි online store', 'Clinic', 'Tuition හරි classes', 'වෙනත්'],
      included: 'ඇතුළත්',
      recommended: 'ඔයාගේ වගේ business වලට ජනප්‍රියයි',
      items: {
        site: 'Website එක, පිටු 5ක් දක්වා',
        pages: 'අමතර පිටු',
        booking: 'Online booking system',
        ai: 'WhatsApp AI assistant',
        orders: 'Online ordering form',
        brand: 'Logo සහ brand kit',
        auto: 'Leads Google Sheets එකට, alerts එක්ක',
      },
      less: 'පිටු අඩු කරන්න',
      more: 'පිටු වැඩි කරන්න',
      total: 'ඇස්තමේන්තුගත ආරම්භක මිල',
      care: 'Care plan එක (අවශ්‍ය නම්)',
      send: 'මේ quote එක WhatsApp එකෙන් යවන්න',
      note: 'ආරම්භක ඇස්තමේන්තුවක්. Free call එකකින් පස්සේ අවසාන මිල කියනවා.',
      msgIntro: 'ආයුබෝවන් Ravion Studio, ඔයාලගේ website එකේ මම quote එකක් හැදුවා:',
    },

    work: {
      title: 'අපි හදපු sites',
      sub: 'ඔයාගේ business එකට තියෙන්න පුළුවන් දේ පෙන්නන්න හදපු concept sites. ඔක්කොම live, phone එකෙන් open කරලා බලන්න.',
      concept: 'Concept site',
      client: 'Client project',
      open: 'Live site එක බලන්න',
    },

    process: {
      title: 'Project එකක් යන විදිහ',
      steps: [
        { name: 'කතා කරමු', text: 'ඔයාගේ business එක සහ ඕන දේ ගැන free විනාඩි 20ක call එකක් හරි WhatsApp chat එකක්.' },
        { name: 'Design', text: 'Code ලියන්න කලින් design එක බලලා වෙනස්කම් ඉල්ලන්න පුළුවන්.' },
        { name: 'හදනවා', text: 'අපි හදලා, WhatsApp, domain, Google profile connect කරලා, phones වල test කරනවා.' },
        { name: 'Launch සහ care', text: 'Live වෙනවා. ප්‍රශ්න fix කරනවා, content update කරනවා, bot එක හොඳට උත්තර දෙනවද බලනවා.' },
      ],
    },

    pricing: {
      title: 'පැහැදිලි ආරම්භක මිල',
      sub: 'Free call එකකින් හරියටම quote එකක් ලැබෙනවා. බාගයක් පටන් ගන්න කලින්, බාගයක් launch එකේදී.',
      lkr: 'Rs. LKR',
      usd: 'USD',
      from: 'සිට',
      featured: 'වැඩියෙන්ම තෝරන',
      cta: 'මේ plan එක ගැන අහන්න',
      plans: {
        starter: { name: 'Starter website', for: 'Online හොයාගන්න ඕන shops, salons, services වලට.', items: ['පිටු 5ක් දක්වා', 'Mobile-first design', 'WhatsApp සහ call buttons', 'Google Maps සහ Business Profile setup', 'Hosting setup free'] },
        business: { name: 'Business + bookings', for: 'Appointments හරි orders හරි ගන්න businesses වලට.', items: ['Starter එකේ ඔක්කොම', 'Online booking හරි order form එකක්', 'Staff සහ services manage කරන්න', 'WhatsApp / email booking alerts', 'සිංහල සහ English පිටු'] },
        ai: { name: 'AI assistant pro', for: 'දවසකට messages ගොඩක් එන කාර්යබහුල businesses වලට.', items: ['Business එකේ ඔක්කොම', 'ඔයාගේ number එකේ WhatsApp AI assistant', 'ඔයාගේ මිල සහ FAQs වලින් train කරලා', 'Leads Google Sheet එකට save වෙනවා', 'Launch එකෙන් පස්සේ දින 30ක් tuning'] },
      },
      care: 'Care plan',
      careText: 'Hosting checks, content updates, bot tuning සහ fixes.',
      perMonth: '/ මාසෙකට',
    },

    faq: {
      title: 'නිතර අහන ප්‍රශ්න',
      items: [
        { q: 'මට technical දේවල් දැනගන්න ඕනද?', a: 'නෑ. ඔයා business එක ගැන කියලා design එක approve කරන්න. Domain, hosting, WhatsApp setup ඇතුළු අනිත් ඔක්කොම අපි බලාගන්නවා.' },
        { q: 'AI assistant එක customers ලාට වැරදි දේවල් කියයිද?', a: 'ඔයා approve කරපු මිල, වෙලාවල්, services වගේ තොරතුරු වලින් විතරයි උත්තර දෙන්නේ. විශ්වාස නැති වෙලාවට chat එක ඔයාට දෙනවා.' },
        { q: 'පස්සේ website එක මටම edit කරන්න පුළුවන්ද?', a: 'ඔව්. Text සහ photos ලේසියෙන් edit කරන්න setup කරලා දෙන්න පුළුවන්, නැත්නම් care plan එකෙන් අපි වෙනස් කරලා දෙනවා.' },
        { q: 'ලංකාවෙන් පිට businesses එක්කත් වැඩ කරනවද?', a: 'ඔව්. පිටරට clients ලා එක්ක USD වලින්, WhatsApp, email සහ video calls හරහා වැඩ කරනවා.' },
        { q: 'ගෙවන්නේ කොහොමද?', a: 'වැඩ පටන් ගන්න කලින් බාගයක්, launch එකේදී ඉතුරු බාගය. ලංකාවේ නම් bank transfer, පිටරට නම් international transfer.' },
      ],
    },

    contact: {
      title: 'ඔයාගේ business එක ගැන කියන්න',
      sub: 'දවසක් ඇතුළත, සාමාන්‍යයෙන් WhatsApp එකෙන් reply කරනවා.',
      name: 'ඔයාගේ නම',
      business: 'Business එකේ නම සහ වර්ගය',
      phone: 'WhatsApp number එක',
      message: 'ඔයාට ඕන මොකද්ද?',
      submit: 'Message එක යවන්න',
      sending: 'යවනවා…',
      sent: 'Message එක ගියා. ඉක්මනින්ම WhatsApp එකෙන් reply කරන්නම්.',
      opened: 'ඔයාගේ message එක එක්ක WhatsApp open වුණා. අපිට එන්න එතන send ඔබන්න.',
      error: 'Message එක ගියේ නෑ. Connection එක බලන්න, නැත්නම් WhatsApp කරන්න.',
      required: 'Reply කරන්න ඔයාගේ නම සහ ඕන දේ දාන්න.',
      orReach: 'නැත්නම් කෙලින්ම සම්බන්ධ වෙන්න',
    },

    footer: {
      line: 'පොඩි businesses වලට websites සහ AI assistants.',
      rights: 'Ravion Studio',
    },
  },
};

// Built-in demo answers for the hero chat (used when no webhook is set).
export function demoReply(text, lang, plans, care, money) {
  const t = text.toLowerCase();
  const has = (...words) => words.some((w) => t.includes(w));
  const si = lang === 'si';
  const [s, b, a] = plans;

  if (has('price', 'cost', 'how much', 'කීය', 'මිල', 'ගාණ', 'ගණන', 'rate', 'package')) {
    return si
      ? `Starter website එකක් ${money(s)} සිට. Bookings එක්ක ${money(b)} සිට. WhatsApp AI assistant එකත් එක්ක ${money(a)} සිට. Care plan එක ${money(care)} මාසෙකට. ඔයාගේ business එක කිව්වොත් හරියටම quote එකක් දෙන්නම්.`
      : `A starter website is from ${money(s)}. With bookings, from ${money(b)}. With a WhatsApp AI assistant, from ${money(a)}. The care plan is ${money(care)} a month. Tell me about your business and we can give an exact quote.`;
  }
  if (has('bot', 'whatsapp', 'assistant', 'ai', 'chatbot', 'auto')) {
    return si
      ? 'WhatsApp AI assistant එක ඔයාගේම number එකේ වැඩ කරනවා. මිල, open වෙලාවල්, location වගේ ප්‍රශ්න වලට සිංහලෙන් සහ English වලින් උත්තර දීලා, bookings ගෙන, lead එක Google Sheet එකට දානවා. අමාරු ප්‍රශ්නයක් ආවොත් chat එක ඔයාට දෙනවා.'
      : 'The WhatsApp AI assistant runs on your own number. It answers questions about prices, hours and location in Sinhala and English, takes bookings and saves each lead to a Google Sheet. When a question is tricky, it hands the chat to you.';
  }
  if (has('long', 'time', 'days', 'when', 'කාල', 'දවස', 'දින', 'කවද', 'ඉක්මන')) {
    return si
      ? 'Starter website එකක් සාමාන්‍යයෙන් දින 5–10යි. Bookings හරි AI assistant එකක් හරි එක්ක සති 2–3ක් වගේ. Design එක ඔයා approve කරපු ගමන් build එක පටන් ගන්නවා.'
      : 'A starter website usually takes 5–10 days. With bookings or an AI assistant, about 2–3 weeks. We start building as soon as you approve the design.';
  }
  if (has('pay', 'payment', 'advance', 'ගෙව', 'ගෙවීම', 'advance')) {
    return si
      ? 'වැඩ පටන් ගන්න කලින් 50%ක්, launch එකේදී ඉතුරු 50%. ලංකාවේ නම් bank transfer, පිටරට නම් international transfer.'
      : 'Half before work starts and half on launch. Bank transfer in Sri Lanka, international transfer from abroad.';
  }
  if (has('domain', 'hosting', 'host', 'ඩොමේන්', 'හොස්ට්')) {
    return si
      ? 'Domain එක ඔයාගේ නමින් ගන්නේ, .com එකක් අවුරුද්දකට ඩොලර් 10–15ක් වගේ. Small business sites වලට hosting එක සාමාන්‍යයෙන් free. Setup එක අපි කරලා දෙනවා.'
      : 'The domain is registered in your name, usually about USD 10–15 a year for a .com. Hosting is usually free for small business sites, and we set it all up for you.';
  }
  if (has('seo', 'google', 'ගූගල්', 'search')) {
    return si
      ? 'හැම site එකකටම basic SEO, Google Business Profile සහ Google Maps setup එක දාලා දෙනවා. එතකොට ඔයාගේ ප්‍රදේශයේ අය search කළාම ඔයාව හොයාගන්න ලේසියි.'
      : 'Every site includes basic SEO plus Google Business Profile and Maps setup, so people nearby find you when they search.';
  }
  if (has('where', 'location', 'located', 'කොහෙද', 'කොහේ', 'ලිපිනය')) {
    return si
      ? 'අපි ලංකාවේ. ලංකාව පුරා සහ පිටරට clients ලා එක්ක online වැඩ කරනවා.'
      : 'We are based in Sri Lanka and work online with clients across the island and abroad.';
  }
  if (has('salon', 'saloon', 'restaurant', 'hotel', 'gym', 'shop', 'clinic', 'cafe', 'tuition', 'සැලෝන්', 'හෝටල්', 'කඩ')) {
    return si
      ? 'නියමයි, ඒ වගේ business එකකට website එකක් + WhatsApp booking assistant එකක් හොඳටම ගැලපෙනවා. Customers ලාට රෑ වුණත් වෙලාවක් book කරන්න පුළුවන්. WhatsApp එකෙන් කතා කරමුද?'
      : 'Great fit. For that kind of business, a website plus a WhatsApp booking assistant works well: customers can book a time even late at night. Shall we continue on WhatsApp?';
  }
  if (/^\s*(hi|hello|hey|hii|helo|ayubowan)\b/i.test(text) || has('ආයුබෝවන්', 'හායි', 'හලෝ')) {
    return si ? 'ආයුබෝවන්! ඔයාගේ business එක මොකද්ද? ඒකට ගැලපෙන දේ කියන්නම්.' : 'Hello! What kind of business do you run? I will suggest what fits.';
  }
  return si
    ? 'හොඳ ප්‍රශ්නයක්. ඒකට හරියටම උත්තර දෙන්න Ravishan ට පුළුවන්. පහළ තියෙන button එකෙන් WhatsApp එකේ අහන්න.'
    : 'Good question. Ravishan can answer that one properly. Use the button below to ask on WhatsApp.';
}
