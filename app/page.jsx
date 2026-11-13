'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { T, demoReply } from './content';
import {
  CONTACT,
  CHAT_WEBHOOK,
  CONTACT_WEBHOOK,
  SOLUTIONS,
  BOOKING_PRODUCT,
  ESTIMATOR,
  SYSTEMS,
  PROJECTS,
  INDUSTRIES,
} from './site-config';

// Photos added to public/img/... (see next.config.mjs). Returns the file for a slot, or null.
const SITE_IMAGES = (() => {
  try {
    return JSON.parse(process.env.SITE_IMAGES || '[]');
  } catch {
    return [];
  }
})();
function imageFor(folder, id) {
  const re = new RegExp(`^/img/${folder}/${id}\\.(jpe?g|png|webp|avif)$`, 'i');
  return SITE_IMAGES.find((f) => re.test(f)) || null;
}

const photoBg = (src, color) =>
  src ? { background: `${color} url(${src}) center / cover no-repeat` } : { background: color };

const waLink = (text) => `https://wa.me/${CONTACT.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
const L = (v, lang) => (v && typeof v === 'object' && 'en' in v ? v[lang] : v);

function store(key, value) {
  try {
    if (value === undefined) return window.localStorage.getItem(key);
    window.localStorage.setItem(key, value);
  } catch (e) {
    return null;
  }
  return null;
}

function goTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}

/* ───────────────────────── Icons ───────────────────────── */

function Mark({ size = 40, framed = true }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
      {framed && <rect width="120" height="120" rx="28" fill="#101632" />}
      <path d="M30 78 A30 30 0 0 1 90 78 Z" fill="#F2762E" />
      <rect x="20" y="84" width="80" height="6" rx="3" fill="#F7B32B" />
      <line x1="60" y1="43" x2="60" y2="31" stroke="#F7B32B" strokeWidth="5" strokeLinecap="round" />
      <circle cx="60" cy="24" r="4.5" fill="#F7B32B" />
      <line x1="35" y1="53" x2="27.5" y2="45.5" stroke="#F7B32B" strokeWidth="5" strokeLinecap="round" />
      <circle cx="23" cy="41" r="4.5" fill="#F7B32B" />
      <line x1="85" y1="53" x2="92.5" y2="45.5" stroke="#F7B32B" strokeWidth="5" strokeLinecap="round" />
      <circle cx="97" cy="41" r="4.5" fill="#F7B32B" />
    </svg>
  );
}

const ICONS = {
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  pos: 'M4 5h16v9H4zM8 18h8M12 14v4M7 9h4',
  phone: 'M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z',
  spark: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z',
  flow: 'M6 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM18 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM6 8v4a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3M18 4v6',
  calendar: 'M5 5h14v15H5zM5 9h14M9 3v4M15 3v4M9 13h2M13 13h2M9 16h2',
  key: 'M14 4a6 6 0 0 0-5.7 7.9L3 17.2V21h3.8v-2.2H9v-2.2h2.2l1.1-1.1A6 6 0 1 0 14 4zM16 8.5h.01',
  shield: 'M12 3l7 3v5c0 4.5-3 8.4-7 10-4-1.6-7-5.5-7-10V6zM9 12l2 2 4-4',
  devices: 'M3 6h13v9H3zM1 18h17M18 9h4v11h-4z',
  lang: 'M4 5h9M8.5 3v2M6 5c.6 3.4 2.8 6 6 7.5M11 5c-.8 3.6-3.4 6.6-7 8M14 21l4-9 4 9M15.3 18h5.4',
  eye: 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  chat: 'M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4A1.5 1.5 0 0 1 4 14.5z',
  check: 'M5 12.5l4.5 4.5L19 7',
  close: 'M6 6l12 12M18 6L6 18',
  external: 'M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5',
  send: 'M4 12l16-8-6 16-2.5-6.5z',
};

function Icon({ name, size = 22, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={ICONS[name]} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ───────────────────────── Header ───────────────────────── */

function Header({ t, lang, setLang }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const links = [
    ['solutions', t.nav.solutions],
    ['work', t.nav.work],
    ['pricing', t.nav.pricing],
    ['estimate', t.nav.estimate],
    ['faq', t.nav.faq],
    ['contact', t.nav.contact],
  ];
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label="Ravion Studio home">
          <Mark size={34} />
          <span className="brand-name">
            <b>Ravion</b> Studio
          </span>
        </a>
        <nav className="nav" aria-label="Main">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button type="button" className="lang-btn" aria-label={t.langAria} onClick={() => setLang(lang === 'en' ? 'si' : 'en')}>
            {t.langLabel}
          </button>
          <a className="btn btn-sun btn-sm hide-sm" href="#estimate">
            {t.cta}
          </a>
          <button type="button" className="menu-btn" aria-label={t.menu} aria-expanded={open} onClick={() => setOpen(!open)}>
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ───────────────────────── Hero product window ───────────────────────── */

function ScreenPOS() {
  const items = [
    ['Milk tea', 180, '#f2c48d', 'pos-milk-tea'], ['Fish bun', 150, '#e9a26b', 'pos-fish-bun'],
    ['Chocolate cake', 950, '#7a4a3a', 'pos-chocolate-cake'], ['Iced coffee', 420, '#b98b67', 'pos-iced-coffee'],
    ['Egg roll', 200, '#f0b44c', 'pos-egg-roll'], ['Lime juice', 250, '#a9cf6b', 'pos-lime-juice'],
  ];
  return (
    <div className="scr scr-pos">
      <div className="pos-items">
        <div className="chips-row">
          <span className="mini-chip is-on">All</span>
          <span className="mini-chip">Drinks</span>
          <span className="mini-chip">Bakery</span>
          <span className="mini-chip">Snacks</span>
        </div>
        <div className="pos-grid">
          {items.map(([n, p, c, img]) => (
            <div key={n} className="pos-item">
              <span className="pos-swatch" style={photoBg(imageFor('hero', img), c)} />
              <span className="pos-name">{n}</span>
              <span className="pos-price">Rs. {p}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="pos-cart">
        <div className="pos-cart-head">
          <b>Order #1042</b>
          <span className="pill pill-ok">Offline ready</span>
        </div>
        <ul>
          <li><span>Milk tea × 2</span><span>360</span></li>
          <li><span>Fish bun × 3</span><span>450</span></li>
          <li><span>Chocolate cake</span><span>950</span></li>
        </ul>
        <div className="pos-sum"><span>Discount</span><span>−0</span></div>
        <div className="pos-total"><span>Total</span><b>Rs. 1,760</b></div>
        <span className="pos-charge">Charge Rs. 1,760</span>
      </div>
    </div>
  );
}

function ScreenInventory() {
  const rows = [
    ['Basmati rice 5kg', 'RC-205', 82, 'ok'],
    ['Sunflower oil 1L', 'OL-118', 14, 'low'],
    ['Dhal 1kg', 'DL-031', 64, 'ok'],
    ['Milk powder 400g', 'MP-440', 6, 'reorder'],
    ['Tea leaves 200g', 'TL-090', 47, 'ok'],
  ];
  const label = { ok: 'In stock', low: 'Low', reorder: 'Reorder' };
  return (
    <div className="scr scr-inv">
      <div className="inv-head">
        <b>Stock · Main warehouse</b>
        <span className="mini-chip">All branches</span>
      </div>
      <div className="inv-table" role="presentation">
        <div className="inv-row inv-th">
          <span>Item</span><span>SKU</span><span>In stock</span><span>Status</span>
        </div>
        {rows.map(([n, s, q, st]) => (
          <div key={s} className="inv-row">
            <span className="inv-name">{n}</span>
            <span className="inv-sku">{s}</span>
            <span className="inv-bar"><i style={{ width: `${Math.min(100, q)}%` }} className={`bar-${st}`} /><em>{q}</em></span>
            <span className={`pill pill-${st}`}>{label[st]}</span>
          </div>
        ))}
      </div>
      <div className="inv-foot">
        <span>2 items need reordering</span>
        <span className="mini-btn">Create purchase order</span>
      </div>
    </div>
  );
}

function ScreenBookings() {
  const staff = ['Nimali', 'Kasun', 'Dilani'];
  const blocks = [
    [0, 1, 2, 'Hair colour', 'a'], [0, 4, 1, 'Cut & style', 'b'],
    [1, 2, 1, "Men's cut", 'b'], [1, 3, 2, 'Beard & facial', 'c'],
    [2, 1, 1, 'Manicure', 'c'], [2, 3, 3, 'Bridal trial', 'a'],
  ];
  return (
    <div className="scr scr-book">
      <div className="book-head">
        <b>Thu, 14 Nov</b>
        <span className="pill pill-ok">6 bookings</span>
      </div>
      <div className="book-grid">
        <span className="book-corner" />
        {staff.map((s, i) => (
          <span key={s} className="book-staff" style={{ gridColumn: i + 2 }}>{s}</span>
        ))}
        {['9:00', '10:00', '11:00', '12:00', '1:00', '2:00'].map((h, i) => (
          <span key={h} className="book-time" style={{ gridRow: i + 2 }}>{h}</span>
        ))}
        {blocks.map(([c, r, span, label, tone]) => (
          <span key={label} className={`book-block tone-${tone}`} style={{ gridColumn: c + 2, gridRow: `${r + 1} / span ${span}` }}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function ScreenStaff() {
  const people = [
    ['NP', 'Nadeesha Perera', 'Front office', '8:52', 'in'],
    ['KR', 'Kavindu Rajapaksha', 'Accounts', '9:14', 'late'],
    ['SF', 'Shehani Fernando', 'Consultant', '—', 'leave'],
    ['TW', 'Tharindu Wijesinghe', 'Consultant', '8:47', 'in'],
  ];
  const label = { in: 'Checked in', late: 'Late', leave: 'On leave' };
  return (
    <div className="scr scr-staff">
      <div className="staff-head">
        <div className="chips-row">
          <span className="mini-chip is-on">Colombo</span>
          <span className="mini-chip">Kandy</span>
        </div>
        <span className="staff-sum">12 in · 1 late · 1 on leave</span>
      </div>
      <ul className="staff-list">
        {people.map(([i, n, r, time, st]) => (
          <li key={n}>
            <span className="avatar">{i}</span>
            <span className="staff-who"><b>{n}</b><small>{r}</small></span>
            <span className="staff-time">{time}</span>
            <span className={`pill pill-${st}`}>{label[st]}</span>
          </li>
        ))}
      </ul>
      <div className="staff-request">
        <span><b>Leave request</b> Shehani · Fri 15 Nov · Family event</span>
        <span className="mini-btn">Approve</span>
      </div>
    </div>
  );
}

function ScreenAI() {
  return (
    <div className="scr scr-ai">
      <p className="ai-msg c">Do you deliver to Kandy? I need 20 cakes for Saturday.</p>
      <p className="ai-event"><Icon name="check" size={14} /> Checked stock and delivery areas</p>
      <p className="ai-msg b">Yes, we deliver to Kandy for Rs. 450. 20 butter cakes come to Rs. 19,000. Shall I reserve them for Saturday morning?</p>
      <p className="ai-msg c">Yes please, my name is Ruwan.</p>
      <p className="ai-event"><Icon name="check" size={14} /> Order saved · owner notified on WhatsApp</p>
      <p className="ai-msg b">Done, Ruwan. Your order is reserved. We will send the payment details now.</p>
    </div>
  );
}

function ScreenWebsite() {
  return (
    <div className="scr scr-web">
      <div className="web-browser">
        <div className="web-bar"><span className="web-url">yourbusiness.lk</span></div>
        <div
          className={`web-page ${imageFor('hero', 'web-hero') ? 'has-photo' : ''}`}
          style={imageFor('hero', 'web-hero') ? { '--web-photo': `url(${imageFor('hero', 'web-hero')})` } : undefined}
        >
          <div className="web-nav"><b>Hearth Bakery</b><span>Menu</span><span>Order</span><span>Visit</span></div>
          <div className="web-hero">
            <p className="web-h">Fresh bakes, delivered across Kandy.</p>
            <span className="mini-btn mini-btn-sun">Order on WhatsApp</span>
          </div>
          <div className="web-cards">
            <span style={photoBg(imageFor('hero', 'web-cake'), '#e7b27a')} />
            <span style={photoBg(imageFor('hero', 'web-bread'), '#c9774a')} />
            <span style={photoBg(imageFor('hero', 'web-pastry'), '#f1d3a1')} />
          </div>
        </div>
      </div>
      <div className="web-phone" aria-hidden="true">
        <div className="web-phone-in">
          <b>Hearth Bakery</b>
          <p>Fresh bakes, delivered across Kandy.</p>
          <span className="mini-btn mini-btn-sun">Order</span>
          <span className="web-phone-card" style={photoBg(imageFor('hero', 'web-cake'), '#e7b27a')} />
        </div>
      </div>
    </div>
  );
}

const SCREENS = [
  ['pos', ScreenPOS, 'Ravion POS', 'Counter 1'],
  ['inventory', ScreenInventory, 'Ravion Stock', 'Warehouse'],
  ['bookings', ScreenBookings, 'Ravion Bookings', 'Main branch'],
  ['staff', ScreenStaff, 'Ravion Team', '2 branches'],
  ['ai', ScreenAI, 'Ravion Agent', 'WhatsApp'],
  ['website', ScreenWebsite, 'Ravion Web', 'Live'],
];

function ProductWindow({ t }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setAuto(false);
  }, []);

  useEffect(() => {
    if (!auto || hover) return undefined;
    const id = setInterval(() => setActive((a) => (a + 1) % SCREENS.length), 4800);
    return () => clearInterval(id);
  }, [auto, hover]);

  const pick = (i) => {
    setActive(i);
    setAuto(false);
  };
  const onKey = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = (active + (e.key === 'ArrowRight' ? 1 : SCREENS.length - 1)) % SCREENS.length;
    pick(next);
    document.getElementById(`tab-${SCREENS[next][0]}`)?.focus();
  };

  const [id, Screen, app, place] = SCREENS[active];

  return (
    <div className="product" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="product-tabs" role="tablist" aria-label={t.hero.tabsLabel} onKeyDown={onKey}>
        {SCREENS.map(([sid], i) => (
          <button
            key={sid}
            id={`tab-${sid}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls="product-panel"
            tabIndex={i === active ? 0 : -1}
            className={`ptab ${i === active ? 'is-on' : ''}`}
            onClick={() => pick(i)}
          >
            {t.demoScreens[sid]}
            {i === active && auto && !hover && <span className="ptab-progress" key={`p-${active}`} />}
          </button>
        ))}
      </div>
      <div className="window" id="product-panel" role="tabpanel" aria-labelledby={`tab-${id}`}>
        <div className="window-bar">
          <span className="window-app">
            <Mark size={18} />
            {app}
          </span>
          <span className="window-place">{place}</span>
        </div>
        <div className="window-body" key={id}>
          <Screen />
        </div>
      </div>
    </div>
  );
}

function Hero({ t }) {
  return (
    <section className="hero" id="top">
      <div className="hero-sky" aria-hidden="true">
        <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMax slice">
          <g fill="none" stroke="#F7B32B" strokeOpacity="0.16" strokeWidth="1">
            <path d="M200 600 A400 400 0 0 1 1000 600" />
            <path d="M320 600 A280 280 0 0 1 880 600" />
            <path d="M440 600 A160 160 0 0 1 760 600" />
          </g>
          <g stroke="#F7B32B" strokeOpacity="0.28" strokeWidth="1.5" strokeLinecap="round">
            <line x1="600" y1="160" x2="600" y2="60" />
            <line x1="330" y1="310" x2="250" y2="230" />
            <line x1="870" y1="310" x2="950" y2="230" />
          </g>
          <g fill="#F7B32B" fillOpacity="0.5">
            <circle cx="600" cy="48" r="5" />
            <circle cx="241" cy="221" r="5" />
            <circle cx="959" cy="221" r="5" />
          </g>
        </svg>
      </div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>{t.hero.title}</h1>
          <p className="lead">{t.hero.sub}</p>
          <div className="cta-row">
            <a className="btn btn-sun" href="#estimate">
              {t.hero.primary}
            </a>
            <a className="btn btn-ghost" href={waLink()} target="_blank" rel="noopener">
              <Icon name="chat" size={18} /> {t.hero.secondary}
            </a>
          </div>
          <ul className="hero-points">
            {t.hero.points.map((p) => (
              <li key={p}>
                <Icon name="check" size={16} /> {p}
              </li>
            ))}
          </ul>
        </div>
        <ProductWindow t={t} />
      </div>
    </section>
  );
}

/* ───────────────────────── Solutions ───────────────────────── */

function Solutions({ t, lang, money, onEstimate, onPlans }) {
  return (
    <section className="section solutions-section" id="solutions">
      <div className="wrap">
        <div className="section-head">
          <h2>{t.solutions.title}</h2>
          <p className="muted">{t.solutions.sub}</p>
        </div>
        <div className="bento">
          {SOLUTIONS.map((s, i) => (
            <article key={s.id} className={`sol sol-${s.id} ${i === 0 ? 'sol-wide sol-dark' : ''} ${imageFor('solutions', s.id) ? 'has-media' : ''}`}>
              {imageFor('solutions', s.id) && (
                <div className="sol-media">
                  <img src={imageFor('solutions', s.id)} alt="" loading="lazy" />
                </div>
              )}
              {i === 0 && !imageFor('solutions', s.id) && (
                <svg className="sol-deco" viewBox="0 0 400 220" aria-hidden="true">
                  <g fill="none" stroke="#F7B32B" strokeOpacity="0.22" strokeWidth="1.2">
                    <path d="M40 220 A160 160 0 0 1 360 220" />
                    <path d="M100 220 A100 100 0 0 1 300 220" />
                  </g>
                  <path d="M150 220 A50 50 0 0 1 250 220 Z" fill="#F2762E" fillOpacity="0.85" />
                  <g stroke="#F7B32B" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.8">
                    <line x1="200" y1="150" x2="200" y2="118" />
                    <line x1="152" y1="170" x2="130" y2="148" />
                    <line x1="248" y1="170" x2="270" y2="148" />
                  </g>
                  <g fill="#F7B32B">
                    <circle cx="200" cy="108" r="6" />
                    <circle cx="123" cy="141" r="6" />
                    <circle cx="277" cy="141" r="6" />
                  </g>
                </svg>
              )}
              <div className="sol-icon">
                <Icon name={s.icon} size={24} />
              </div>
              <h3>{L(s.name, lang)}</h3>
              <p className="sol-pitch">{L(s.pitch, lang)}</p>
              <ul className="sol-examples">
                {(i === 0 ? s.examples : s.examples.slice(0, 4)).map((ex) => (
                  <li key={ex.en}>{L(ex, lang)}</li>
                ))}
              </ul>
              <div className="sol-foot">
                <p className="sol-price">
                  <span>{t.solutions.from}</span> {money(s.tiers[0])}
                </p>
                <div className="sol-actions">
                  <button type="button" className={`btn btn-sm ${i === 0 ? 'btn-sun' : 'btn-line'}`} onClick={() => onEstimate(s.id)}>
                    {t.solutions.estimate}
                  </button>
                  <button type="button" className="link-btn" onClick={() => onPlans(s.id)}>
                    {t.solutions.seePricing}
                  </button>
                </div>
              </div>
            </article>
          ))}
          <article className="sol sol-wide sol-product">
            <div className="sol-product-copy">
              <p className="tag">{t.solutions.productTag}</p>
              <h3>
                <Icon name="calendar" size={26} /> {BOOKING_PRODUCT.name}
              </h3>
              <p className="sol-pitch">{L(BOOKING_PRODUCT.text, lang)}</p>
              <a className="btn btn-sm btn-light" href={BOOKING_PRODUCT.url} target="_blank" rel="noopener">
                {t.solutions.productCta} <Icon name="external" size={16} />
              </a>
            </div>
            <div className="sol-product-visual" aria-hidden="true">
              <div className="np-card">
                <b>Book a time</b>
                <div className="np-days">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d, i) => (
                    <span key={d} className={i === 3 ? 'is-on' : ''}>{d}<i>{11 + i}</i></span>
                  ))}
                </div>
                <div className="np-slots">
                  {['9:30', '10:15', '11:00', '2:30', '3:15', '4:00'].map((s, i) => (
                    <span key={s} className={i === 4 ? 'is-on' : ''}>{s}</span>
                  ))}
                </div>
                <span className="np-confirm">Confirm booking</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Industries ───────────────────────── */

function Industries({ t, lang, money, onEstimate }) {
  const [active, setActive] = useState(0);
  const ind = INDUSTRIES[active];
  const sol = SOLUTIONS.find((s) => s.id === ind.estimate);
  const onKey = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = (active + (e.key === 'ArrowRight' ? 1 : INDUSTRIES.length - 1)) % INDUSTRIES.length;
    setActive(next);
    document.getElementById(`ind-${INDUSTRIES[next].id}`)?.focus();
  };
  return (
    <section className="section industries-section">
      <div className="wrap">
        <div className="section-head">
          <h2>{t.industries.title}</h2>
          <p className="muted">{t.industries.sub}</p>
        </div>
        <div className="ind-tabs" role="tablist" aria-label={t.industries.title} onKeyDown={onKey}>
          {INDUSTRIES.map((x, i) => (
            <button
              key={x.id}
              id={`ind-${x.id}`}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls="ind-panel"
              tabIndex={i === active ? 0 : -1}
              className={`chip-tab ${i === active ? 'is-on' : ''}`}
              onClick={() => setActive(i)}
            >
              {L(x.name, lang)}
            </button>
          ))}
        </div>
        <div
          className={`ind-panel ${imageFor('industries', ind.id) ? 'has-photo' : ''}`}
          id="ind-panel"
          role="tabpanel"
          aria-labelledby={`ind-${ind.id}`}
          key={ind.id}
        >
          {imageFor('industries', ind.id) && (
            <div className="ind-photo">
              <img src={imageFor('industries', ind.id)} alt={L(ind.name, lang)} loading="lazy" />
            </div>
          )}
          <div>
            <h3>{t.industries.usually}</h3>
            <ul className="ind-list">
              {ind.items.map((it) => (
                <li key={it.en}>
                  <span className="tick"><Icon name="check" size={14} /></span>
                  {L(it, lang)}
                </li>
              ))}
            </ul>
          </div>
          <div className="ind-start">
            <span className="sol-icon"><Icon name={sol.icon} size={22} /></span>
            <p className="ind-sol">{L(sol.name, lang)}</p>
            <p className="ind-from">
              {t.solutions.from} <b>{money(sol.tiers[0])}</b>
            </p>
            <button type="button" className="btn btn-sun btn-sm" onClick={() => onEstimate(ind.estimate, ind.modules)}>
              {t.industries.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── WhatsApp demo ───────────────────────── */

function WhatsAppDemo({ t, lang }) {
  const d = t.demo;
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);
  const [running, setRunning] = useState(false);
  const phoneRef = useRef(null);
  const bodyRef = useRef(null);
  const timers = useRef([]);
  const started = useRef(false);
  const playRef = useRef(null);

  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const play = () => {
    clear();
    setShown(0);
    setDone(false);
    setTyping(false);
    setRunning(true);
    started.current = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(d.script.length);
      setDone(true);
      setRunning(false);
      return;
    }
    let time = 500;
    d.script.forEach((m, i) => {
      if (m.who === 'b') {
        timers.current.push(setTimeout(() => setTyping(true), time));
        time += 1400;
      }
      timers.current.push(
        setTimeout(() => {
          setTyping(false);
          setShown(i + 1);
        }, time)
      );
      time += m.who === 'c' ? 1200 : 1700;
    });
    timers.current.push(
      setTimeout(() => {
        setDone(true);
        setRunning(false);
      }, time)
    );
  };
  playRef.current = play;

  useEffect(() => {
    const el = phoneRef.current;
    if (!el || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) playRef.current();
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clear();
    };
  }, []);

  useEffect(() => {
    if (started.current) playRef.current();
  }, [lang]);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [shown, typing]);

  const logs = d.script.slice(0, shown).filter((m) => m.log).map((m) => m.log);
  if (done) logs.push(d.last);

  return (
    <section className="section demo-section" id="demo">
      <div className="wrap demo">
        <div className="demo-copy">
          <h2>{d.title}</h2>
          <p className="muted">{d.sub}</p>
          <div className="behind">
            <h3>{d.behind}</h3>
            {logs.length ? (
              <ol className="log" aria-live="polite">
                {logs.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ol>
            ) : (
              <p className="log-empty">{d.waiting}</p>
            )}
          </div>
          <p className="stat">{d.stat}</p>
          <button type="button" className="btn btn-line-light" onClick={play} disabled={running}>
            {done ? d.replay : d.play}
          </button>
        </div>
        <div className="phone" ref={phoneRef}>
          <div className="phone-screen">
            <div className="wa-head">
              <div className="wa-avatar" aria-hidden="true">G</div>
              <div>
                <p className="wa-name">
                  {d.shop} <span className="wa-tag">{d.shopNote}</span>
                </p>
                <p className="wa-online">{d.online}</p>
              </div>
            </div>
            <div className="wa-body" ref={bodyRef} aria-live="polite">
              {d.script.slice(0, shown).map((m, i) => (
                <p key={`${lang}-${i}`} className={`wa-msg ${m.who}`}>
                  {m.text}
                </p>
              ))}
              {typing && (
                <p className="wa-msg b wa-typing" aria-label="typing">
                  <span />
                  <span />
                  <span />
                </p>
              )}
            </div>
            <div className="wa-input" aria-hidden="true">
              <span>Message</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Work ───────────────────────── */

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

function WorkTile({ p, t, lang }) {
  const src = p.image || `/work/${slugify(p.name)}.jpg`;
  const [failed, setFailed] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);
  return (
    <li className="work-tile" style={{ '--tone': p.tone }}>
      <a href={p.url} target="_blank" rel="noopener">
        <div className={`work-visual ${failed ? '' : 'has-image'}`}>
          {failed ? (
            <span>{p.name}</span>
          ) : (
            <img ref={imgRef} src={src} alt={`${p.name} website, ${L(p.type, lang)}`} loading="lazy" onError={() => setFailed(true)} />
          )}
        </div>
        <div className="work-meta">
          <h3>{p.name}</h3>
          <p>{L(p.type, lang)}</p>
          <p className="work-kind">{p.kind === 'client' ? t.work.client : t.work.concept}</p>
        </div>
      </a>
    </li>
  );
}

function Work({ t, lang }) {
  return (
    <section className="section work-section" id="work">
      <div className="wrap">
        <div className="section-head">
          <h2>{t.work.title}</h2>
        </div>
        <h3 className="sub-head">{t.work.systems}</h3>
        <ul className="systems">
          {SYSTEMS.map((s) => (
            <li key={s.id} className="system" style={{ '--tone': s.tone }}>
              <div className="system-top">
                <span className={`status status-${s.status}`}>{s.status === 'live' ? t.work.live : t.work.building}</span>
                <p className="system-name">{L(s.name, lang)}</p>
                <p className="system-what">{L(s.what, lang)}</p>
              </div>
              {imageFor('systems', s.id) && (
                <div className="system-shot">
                  <img src={imageFor('systems', s.id)} alt={`${L(s.name, lang)} screenshot`} loading="lazy" />
                </div>
              )}
              <div className="system-body">
                <p className="system-kind">{L(s.kind, lang)}</p>
                <p>{L(s.detail, lang)}</p>
                {s.url && (
                  <a className="text-link" href={s.url} target="_blank" rel="noopener">
                    {t.work.openProduct} {L(s.name, lang)} <Icon name="external" size={15} />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="websites-head">
          <h3 className="sub-head">{t.work.websites}</h3>
          <p className="muted">{t.work.websitesSub}</p>
        </div>
        <ul className="work-grid">
          {PROJECTS.map((p) => (
            <WorkTile key={p.name} p={p} t={t} lang={lang} />
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────── Pricing ───────────────────────── */

function CurrencyToggle({ t, currency, setCurrency }) {
  return (
    <div className="toggle" role="group" aria-label={t.pricing.currency}>
      <button type="button" aria-pressed={currency === 'lkr'} onClick={() => setCurrency('lkr')}>
        {t.pricing.lkr}
      </button>
      <button type="button" aria-pressed={currency === 'usd'} onClick={() => setCurrency('usd')}>
        {t.pricing.usd}
      </button>
    </div>
  );
}

function Pricing({ t, lang, currency, setCurrency, money, tab, setTab }) {
  const active = Math.max(0, SOLUTIONS.findIndex((s) => s.id === tab));
  const s = SOLUTIONS[active];
  const onKey = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = (active + (e.key === 'ArrowRight' ? 1 : SOLUTIONS.length - 1)) % SOLUTIONS.length;
    setTab(SOLUTIONS[next].id);
    document.getElementById(`price-${SOLUTIONS[next].id}`)?.focus();
  };
  return (
    <section className="section pricing-section" id="pricing">
      <div className="wrap">
        <div className="section-head row">
          <div>
            <h2>{t.pricing.title}</h2>
            <p className="muted">{t.pricing.sub}</p>
          </div>
          <CurrencyToggle t={t} currency={currency} setCurrency={setCurrency} />
        </div>
        <div className="price-tabs" role="tablist" aria-label={t.pricing.title} onKeyDown={onKey}>
          {SOLUTIONS.map((x, i) => (
            <button
              key={x.id}
              id={`price-${x.id}`}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls="price-panel"
              tabIndex={i === active ? 0 : -1}
              className={`price-tab ${i === active ? 'is-on' : ''}`}
              onClick={() => setTab(x.id)}
            >
              <Icon name={x.icon} size={18} />
              {L(x.name, lang)}
            </button>
          ))}
        </div>
        <div id="price-panel" role="tabpanel" aria-labelledby={`price-${s.id}`} key={s.id} className="price-panel">
          <div className="plans">
            {s.tiers.map((tier) => (
              <article key={tier.name.en} className={`plan ${tier.featured ? 'featured' : ''}`}>
                <div className="plan-top">
                  <h3>{L(tier.name, lang)}</h3>
                  {tier.featured && <p className="plan-flag">{t.pricing.featured}</p>}
                </div>
                <p className="price">
                  <span className="price-from">{t.pricing.from}</span> {money(tier)}
                </p>
                <ul>
                  {tier.items.map((it) => (
                    <li key={it.en}>
                      <Icon name="check" size={16} /> {L(it, lang)}
                    </li>
                  ))}
                </ul>
                <a
                  className={`btn ${tier.featured ? 'btn-sun' : 'btn-line'}`}
                  href={waLink(`${L(s.name, 'en')} – ${L(tier.name, 'en')}: `)}
                  target="_blank"
                  rel="noopener"
                >
                  {t.pricing.cta}
                </a>
              </article>
            ))}
          </div>
          <div className="care">
            <p>
              <b>{t.pricing.care}</b>
            </p>
            <p className="care-price">
              {t.pricing.from} {money(s.care)} <span>{t.pricing.perMonth}</span>
            </p>
          </div>
          <p className="pay-note">{t.pricing.payment}</p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Estimator ───────────────────────── */

function roundTo(n, currency) {
  const step = currency === 'usd' ? 10 : 5000;
  return Math.max(step, Math.round(n / step) * step);
}

function computeEstimate(est, currency) {
  const cfg = ESTIMATOR.types[est.type];
  const pick = (o) => o[currency] || 0;
  let price = pick(cfg.base);
  let weeks = cfg.weeks;
  cfg.modules.forEach((m) => {
    if (est.modules.includes(m.id)) {
      price += pick(m);
      weeks += m.weeks || 0;
    }
  });
  let factor = 1;
  if (cfg.scaled) {
    const u = ESTIMATOR.users.find((x) => x.id === est.users) || ESTIMATOR.users[0];
    const b = ESTIMATOR.branches.find((x) => x.id === est.branches) || ESTIMATOR.branches[0];
    factor = u.factor * b.factor;
    price *= factor;
    weeks *= 1 + (u.factor - 1) / 2 + (b.factor - 1) / 2;
  }
  if (est.type === 'management' || est.type === 'pos') {
    ESTIMATOR.platforms.forEach((p) => {
      if (!p.included && est.platforms.includes(p.id)) {
        price += pick(p);
        weeks += p.weeks || 0;
      }
    });
  }
  let rush = false;
  ESTIMATOR.extras.forEach((x) => {
    if (!est.extras.includes(x.id)) return;
    if (x.pct) rush = true;
    else {
      price += pick(x);
      weeks += x.weeks || 0;
    }
  });
  if (rush) {
    price *= 1.2;
    weeks *= 0.75;
  }
  const care = pick(cfg.careFrom) * (cfg.scaled ? factor : 1);
  return {
    low: roundTo(price * 0.9, currency),
    high: roundTo(price * 1.25, currency),
    wLow: Math.max(1, Math.round(weeks)),
    wHigh: Math.max(2, Math.ceil(weeks * 1.35)),
    care: currency === 'usd' ? Math.round(care) : Math.round(care / 500) * 500,
  };
}

function Check({ checked, onChange, label, meta }) {
  return (
    <label className={`opt ${checked ? 'is-on' : ''}`}>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className="opt-box" aria-hidden="true">
        <Icon name="check" size={14} />
      </span>
      <span className="opt-label">{label}</span>
      {meta && <span className="opt-meta">{meta}</span>}
    </label>
  );
}

function Segmented({ name, value, options, onChange, lang }) {
  return (
    <div className="seg" role="radiogroup" aria-label={name}>
      {options.map((o) => (
        <label key={o.id} className={`seg-opt ${value === o.id ? 'is-on' : ''}`}>
          <input type="radio" name={name} value={o.id} checked={value === o.id} onChange={() => onChange(o.id)} />
          {L(o.label, lang)}
        </label>
      ))}
    </div>
  );
}

function Estimator({ t, lang, currency, setCurrency, fmt, est, setEst }) {
  const e = t.estimator;
  const cfg = ESTIMATOR.types[est.type];
  const r = computeEstimate(est, currency);
  const sol = SOLUTIONS.find((s) => s.id === est.type);
  const showPlatforms = est.type === 'management' || est.type === 'pos';

  const toggle = (key, id, on) =>
    setEst((s) => ({ ...s, [key]: on ? [...new Set([...s[key], id])] : s[key].filter((x) => x !== id) }));
  const plus = (o) => (o[currency] ? `+${fmt(o[currency])}` : '');

  const chosen = [
    ...cfg.modules.filter((m) => est.modules.includes(m.id)).map((m) => L(m.label, lang)),
    ...(showPlatforms ? ESTIMATOR.platforms.filter((p) => !p.included && est.platforms.includes(p.id)).map((p) => L(p.label, lang)) : []),
    ...ESTIMATOR.extras.filter((x) => est.extras.includes(x.id)).map((x) => L(x.label, lang)),
  ];
  const sizeLine = cfg.scaled
    ? `${e.users}: ${L(ESTIMATOR.users.find((u) => u.id === est.users).label, lang)} · ${e.branches}: ${L(ESTIMATOR.branches.find((b) => b.id === est.branches).label, lang)}`
    : '';

  const message = [
    e.msgIntro,
    `• ${L(sol.name, lang)}`,
    ...chosen.map((c) => `• ${c}`),
    sizeLine && `• ${sizeLine}`,
    `${e.result}: ${fmt(r.low)} – ${fmt(r.high)}`,
    `${e.timeline}: ${r.wLow}–${r.wHigh} ${e.weeks}`,
  ]
    .filter(Boolean)
    .join('\n');

  let step = 0;
  const n = () => (step += 1);

  return (
    <section className="section estimate-section" id="estimate">
      <div className="wrap">
        <div className="section-head row">
          <div>
            <h2>{e.title}</h2>
            <p className="muted">{e.sub}</p>
          </div>
          <CurrencyToggle t={t} currency={currency} setCurrency={setCurrency} />
        </div>

        <div className="est">
          <div className="est-form">
            <fieldset className="est-step">
              <legend><span className="est-no">{n()}</span>{e.step1}</legend>
              <div className="type-grid" role="radiogroup" aria-label={e.step1}>
                {SOLUTIONS.map((s) => (
                  <label key={s.id} className={`type-opt ${est.type === s.id ? 'is-on' : ''}`}>
                    <input
                      type="radio"
                      name="est-type"
                      value={s.id}
                      checked={est.type === s.id}
                      onChange={() => setEst((x) => ({ ...x, type: s.id, modules: [] }))}
                    />
                    <Icon name={s.icon} size={22} />
                    <span>{L(s.name, lang)}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="est-step">
              <legend><span className="est-no">{n()}</span>{e.step2}</legend>
              <div className="opt-grid">
                {cfg.modules.map((m) => (
                  <Check
                    key={m.id}
                    checked={est.modules.includes(m.id)}
                    onChange={(on) => toggle('modules', m.id, on)}
                    label={L(m.label, lang)}
                    meta={plus(m)}
                  />
                ))}
              </div>
            </fieldset>

            {cfg.scaled && (
              <fieldset className="est-step">
                <legend><span className="est-no">{n()}</span>{e.step3}</legend>
                <div className="size-grid">
                  <div>
                    <p className="field-label">{e.users}</p>
                    <Segmented name={e.users} value={est.users} options={ESTIMATOR.users} lang={lang} onChange={(v) => setEst((x) => ({ ...x, users: v }))} />
                  </div>
                  <div>
                    <p className="field-label">{e.branches}</p>
                    <Segmented name={e.branches} value={est.branches} options={ESTIMATOR.branches} lang={lang} onChange={(v) => setEst((x) => ({ ...x, branches: v }))} />
                  </div>
                </div>
              </fieldset>
            )}

            {showPlatforms && (
              <fieldset className="est-step">
                <legend><span className="est-no">{n()}</span>{e.step4}</legend>
                <div className="opt-grid">
                  {ESTIMATOR.platforms.map((p) =>
                    p.included ? (
                      <div key={p.id} className="opt is-on is-fixed">
                        <span className="opt-box" aria-hidden="true"><Icon name="check" size={14} /></span>
                        <span className="opt-label">{L(p.label, lang)}</span>
                        <span className="opt-meta">{e.included}</span>
                      </div>
                    ) : (
                      <Check key={p.id} checked={est.platforms.includes(p.id)} onChange={(on) => toggle('platforms', p.id, on)} label={L(p.label, lang)} meta={plus(p)} />
                    )
                  )}
                </div>
              </fieldset>
            )}

            <fieldset className="est-step">
              <legend><span className="est-no">{n()}</span>{e.step5}</legend>
              <div className="opt-grid">
                {ESTIMATOR.extras.map((x) => (
                  <Check
                    key={x.id}
                    checked={est.extras.includes(x.id)}
                    onChange={(on) => toggle('extras', x.id, on)}
                    label={L(x.label, lang)}
                    meta={x.pct ? `+${Math.round(x.pct * 100)}%` : plus(x)}
                  />
                ))}
              </div>
            </fieldset>
            <a className="est-bar" href="#est-result">
              <span>
                <small>{e.result}</small>
                <b>{fmt(r.low)} – {fmt(r.high)}</b>
              </span>
              <span className="est-bar-go">{e.yourSetup}</span>
            </a>
          </div>

          <aside className="est-result" id="est-result">
            <p className="er-label">{e.result}</p>
            <p className="er-price" aria-live="polite">
              {fmt(r.low)} <span>–</span> {fmt(r.high)}
            </p>
            <div className="er-row">
              <div>
                <p className="er-label">{e.timeline}</p>
                <p className="er-val">
                  {r.wLow}–{r.wHigh} {e.weeks}
                </p>
              </div>
              <div>
                <p className="er-label">{e.monthly}</p>
                <p className="er-val">
                  {fmt(r.care)} <small>{t.pricing.perMonth}</small>
                </p>
              </div>
            </div>
            <div className="er-setup">
              <p className="er-label">{e.yourSetup}</p>
              <p className="er-type">
                <Icon name={sol.icon} size={18} /> {L(sol.name, lang)}
              </p>
              <ul>
                {chosen.length ? chosen.map((c) => <li key={c}>{c}</li>) : <li>{e.noFeatures}</li>}
                {sizeLine && <li>{sizeLine}</li>}
              </ul>
            </div>
            <a className="btn btn-sun btn-block" href={waLink(message)} target="_blank" rel="noopener">
              <Icon name="chat" size={18} /> {e.send}
            </a>
            <p className="er-note">{e.note}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Process, Why, FAQ ───────────────────────── */

function Process({ t }) {
  return (
    <section className="section process-section">
      <div className="wrap">
        <div className="section-head">
          <h2>{t.process.title}</h2>
        </div>
        <ol className="steps">
          {t.process.steps.map((s, i) => (
            <li key={s.name}>
              <span className="step-no" aria-hidden="true">{i + 1}</span>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Why({ t }) {
  return (
    <section className="section why-section">
      <div className="wrap">
        <div className="section-head">
          <h2>{t.why.title}</h2>
        </div>
        <ul className="why">
          {t.why.items.map((w) => (
            <li key={w.name}>
              <span className="why-icon"><Icon name={w.icon} size={24} /></span>
              <h3>{w.name}</h3>
              <p>{w.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq({ t }) {
  return (
    <section className="section faq-section" id="faq">
      <div className="wrap faq-wrap">
        <h2>{t.faq.title}</h2>
        <div className="faq-list">
          {t.faq.items.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Contact ───────────────────────── */

function Contact({ t, lang }) {
  const empty = { name: '', business: '', phone: '', need: '', message: '' };
  const [form, setForm] = useState(empty);
  const [state, setState] = useState('idle');
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setState('required');
      return;
    }
    const need = form.need ? `\nNeed: ${form.need}` : '';
    const text = `Hi Ravion Studio, I'm ${form.name}${form.business ? ` (${form.business})` : ''}.${need}\n${form.message}${form.phone ? `\nWhatsApp: ${form.phone}` : ''}`;
    if (CONTACT_WEBHOOK) {
      setState('sending');
      try {
        const res = await fetch(CONTACT_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form, source: 'ravionstudio.com', at: new Date().toISOString() }),
        });
        if (!res.ok) throw new Error('bad');
        setState('sent');
        setForm(empty);
      } catch (err) {
        setState('error');
      }
      return;
    }
    window.open(waLink(text), '_blank', 'noopener');
    setState('opened');
  }

  const msg = { required: t.contact.required, sent: t.contact.sent, opened: t.contact.opened, error: t.contact.error }[state];

  return (
    <section className="section contact-section" id="contact">
      <div className="wrap contact">
        <div>
          <h2>{t.contact.title}</h2>
          <p className="muted">{t.contact.sub}</p>
          <div className="direct">
            <p className="direct-label">{t.contact.orReach}</p>
            <a href={waLink()} target="_blank" rel="noopener">
              WhatsApp {CONTACT.whatsappDisplay}
            </a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="form-row">
            <label>
              {t.contact.name}
              <input value={form.name} onChange={set('name')} autoComplete="name" required />
            </label>
            <label>
              {t.contact.phone}
              <input value={form.phone} onChange={set('phone')} autoComplete="tel" inputMode="tel" />
            </label>
          </div>
          <label>
            {t.contact.business}
            <input value={form.business} onChange={set('business')} autoComplete="organization" />
          </label>
          <label>
            {t.contact.need}
            <select value={form.need} onChange={set('need')}>
              <option value="">{t.contact.needAny}</option>
              {SOLUTIONS.map((s) => (
                <option key={s.id} value={L(s.name, 'en')}>
                  {L(s.name, lang)}
                </option>
              ))}
            </select>
          </label>
          <label>
            {t.contact.message}
            <textarea rows={4} value={form.message} onChange={set('message')} required />
          </label>
          <button type="submit" className="btn btn-sun" disabled={state === 'sending'}>
            {state === 'sending' ? t.contact.sending : t.contact.submit}
          </button>
          {msg && (
            <p className={`form-msg ${state === 'error' || state === 'required' ? 'is-bad' : ''}`} role="status">
              {msg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

/* ───────────────────────── Chat widget ───────────────────────── */

function ChatWidget({ t, lang, money }) {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ from: 'bot', text: t.chat.greeting }]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [ref, setRef] = useState('');
  const logRef = useRef(null);
  const inputRef = useRef(null);
  const launcherRef = useRef(null);

  useEffect(() => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'RV-';
    for (let i = 0; i < 5; i += 1) code += chars[Math.floor(Math.random() * chars.length)];
    setRef(code);
  }, []);

  useEffect(() => {
    setMsgs((m) => (m.length <= 1 ? [{ from: 'bot', text: t.chat.greeting }] : m));
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, busy, open]);

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  function saveChat(messages, event = 'message') {
    if (!ref || messages.length < 2) return;
    try {
      fetch('/api/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ref, event, lang, messages, page: window.location.pathname }),
        keepalive: true,
      }).catch(() => {});
    } catch (e) {
      // saving is best-effort
    }
  }

  async function ask(text) {
    const q = text.trim();
    if (!q || busy) return;
    const next = [...msgs, { from: 'me', text: q }];
    setMsgs(next);
    setInput('');
    setBusy(true);
    let reply = '';
    try {
      const res = await fetch(CHAT_WEBHOOK || '/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: q, lang, history: next.slice(-12) }),
      });
      const data = await res.json();
      reply = (data.reply || data.output || '').trim();
    } catch (e) {
      reply = '';
    }
    if (!reply) {
      await new Promise((r) => setTimeout(r, 500));
      reply = demoReply(q, lang, SOLUTIONS, money);
    }
    const all = [...next, { from: 'bot', text: reply }];
    setMsgs(all);
    setBusy(false);
    saveChat(all);
  }

  const visitorTalked = msgs.some((m) => m.from === 'me');
  const waText = visitorTalked && ref ? t.chat.waIntro.replace('{ref}', ref) : '';

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        className={`chat-launcher ${open ? 'is-hidden' : ''}`}
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={t.chat.launcher}
      >
        <Mark size={30} />
        <span>{t.chat.launcher}</span>
      </button>
      <div id="chat-panel" className={`chat-panel ${open ? 'is-open' : ''}`} role="dialog" aria-label={t.chat.title} aria-hidden={!open}>
        <div className="chat-head">
          <Mark size={32} />
          <div>
            <div className="chat-title">{t.chat.title}</div>
            <div className="chat-status">
              <span className="dot" aria-hidden="true" /> {t.chat.status}
            </div>
          </div>
          <button type="button" className="chat-close" aria-label={t.chat.close} onClick={() => { setOpen(false); launcherRef.current?.focus(); }} tabIndex={open ? 0 : -1}>
            <Icon name="close" size={20} />
          </button>
        </div>
        <div className="chat-log" ref={logRef} aria-live="polite">
          {msgs.map((m, i) => (
            <p key={i} className={`bubble ${m.from}`}>
              {m.text}
            </p>
          ))}
          {busy && <p className="bubble bot typing">{t.chat.thinking}</p>}
        </div>
        {msgs.length < 3 && (
          <div className="chips">
            {t.chat.suggestions.map((s) => (
              <button key={s} type="button" className="chip" onClick={() => ask(s)} tabIndex={open ? 0 : -1}>
                {s}
              </button>
            ))}
          </div>
        )}
        <form
          className="chat-form"
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
        >
          <label htmlFor="chat-input" className="sr-only">
            {t.chat.placeholder}
          </label>
          <input
            id="chat-input"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.chat.placeholder}
            autoComplete="off"
            tabIndex={open ? 0 : -1}
          />
          <button type="submit" className="chat-send" disabled={busy} aria-label={t.chat.send} tabIndex={open ? 0 : -1}>
            <Icon name="send" size={18} />
          </button>
        </form>
        <a className="handoff" href={waLink(waText)} target="_blank" rel="noopener" onClick={() => saveChat(msgs, 'handoff')} tabIndex={open ? 0 : -1}>
          <Icon name="chat" size={16} /> {t.chat.handoff}
        </a>
        {visitorTalked && (
          <p className="chat-privacy">
            {t.chat.privacy} <a href="/privacy" target="_blank" rel="noopener">{t.footer.privacy}</a>
          </p>
        )}
      </div>
    </>
  );
}

/* ───────────────────────── Page ───────────────────────── */

export default function Page() {
  const [lang, setLangState] = useState('en');
  const [currency, setCurrencyState] = useState('lkr');
  const [priceTab, setPriceTab] = useState(SOLUTIONS[0].id);
  const [est, setEst] = useState({ type: 'management', modules: ['inventory', 'customers'], users: 'u10', branches: 'b1', platforms: [], extras: [] });

  useEffect(() => {
    // Always open in English; Sinhala only when the visitor switches in this visit.
    const c = store('ravion-currency');
    if (c === 'usd' || c === 'lkr') setCurrencyState(c);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
  }, [lang]);

  const setLang = (l) => {
    setLangState(l);
  };
  const setCurrency = (c) => {
    setCurrencyState(c);
    store('ravion-currency', c);
  };

  const t = T[lang];
  const fmt = useMemo(
    () => (n) => (currency === 'usd' ? `$${Math.round(n).toLocaleString('en-US')}` : `Rs. ${Math.round(n).toLocaleString('en-US')}`),
    [currency]
  );
  const money = (p) => fmt(currency === 'usd' ? p.usd : p.lkr);

  const startEstimate = (type, modules) => {
    setEst((s) => ({ ...s, type, modules: modules || [] }));
    goTo('estimate');
  };
  const showPlans = (id) => {
    setPriceTab(id);
    goTo('pricing');
  };

  return (
    <>
      <a href="#solutions" className="skip">
        Skip to content
      </a>
      <Header t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <Solutions t={t} lang={lang} money={money} onEstimate={startEstimate} onPlans={showPlans} />
        <Industries t={t} lang={lang} money={money} onEstimate={startEstimate} />
        <Work t={t} lang={lang} />
        <WhatsAppDemo t={t} lang={lang} />
        <Pricing t={t} lang={lang} currency={currency} setCurrency={setCurrency} money={money} tab={priceTab} setTab={setPriceTab} />
        <Estimator t={t} lang={lang} currency={currency} setCurrency={setCurrency} fmt={fmt} est={est} setEst={setEst} />
        <Process t={t} />
        <Why t={t} />
        <Faq t={t} />
        <Contact t={t} lang={lang} />
      </main>
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <div className="brand">
              <Mark size={34} />
              <span className="brand-name">
                <b>Ravion</b> Studio
              </span>
            </div>
            <p className="footer-line">{t.footer.line}</p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <a href="#solutions">{t.nav.solutions}</a>
            <a href="#work">{t.nav.work}</a>
            <a href="#pricing">{t.nav.pricing}</a>
            <a href="#estimate">{t.nav.estimate}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="footer-contact">
            <a href={waLink()} target="_blank" rel="noopener">WhatsApp {CONTACT.whatsappDisplay}</a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <p>
            © {new Date().getFullYear()} {t.footer.rights}, {CONTACT.location}
          </p>
          <a href="/privacy">{t.footer.privacy}</a>
        </div>
      </footer>
      <ChatWidget t={t} lang={lang} money={money} />
    </>
  );
}
