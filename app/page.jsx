'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { T, demoReply } from './content';
import { CONTACT, CHAT_WEBHOOK, CONTACT_WEBHOOK, PLANS, CARE_PLAN, PROJECTS, QUOTE_ITEMS } from './site-config';

const waLink = (text) =>
  `https://wa.me/${CONTACT.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

function store(key, value) {
  try {
    if (value === undefined) return window.localStorage.getItem(key);
    window.localStorage.setItem(key, value);
  } catch (e) {
    return null;
  }
  return null;
}

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

function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4h0A1.5 1.5 0 0 1 4 14.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Header({ t, lang, setLang }) {
  const [open, setOpen] = useState(false);
  const links = [
    ['services', t.nav.services],
    ['demo', t.nav.demo],
    ['work', t.nav.work],
    ['pricing', t.nav.pricing],
    ['faq', t.nav.faq],
    ['contact', t.nav.contact],
  ];
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label="Ravion Studio home">
          <Mark size={34} />
          <span className="brand-name">
            <b>Ravion</b> Studio
          </span>
        </a>
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="lang-btn"
            aria-label={t.langAria}
            onClick={() => setLang(lang === 'en' ? 'si' : 'en')}
          >
            {t.langLabel}
          </button>
          <a className="btn btn-sun btn-sm hide-sm" href={waLink()} target="_blank" rel="noopener">
            {t.whatsappShort}
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

function Chat({ t, lang, money }) {
  const [msgs, setMsgs] = useState([{ from: 'bot', text: t.chat.greeting }]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const logRef = useRef(null);
  const lastQuestion = useRef('');

  useEffect(() => {
    setMsgs([{ from: 'bot', text: t.chat.greeting }]);
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, busy]);

  async function ask(text) {
    const q = text.trim();
    if (!q || busy) return;
    lastQuestion.current = q;
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
      reply = demoReply(q, lang, PLANS, CARE_PLAN, money);
    }
    setMsgs((m) => [...m, { from: 'bot', text: reply }]);
    setBusy(false);
  }

  return (
    <div className="chat" role="region" aria-label={t.chat.title}>
      <div className="chat-head">
        <Mark size={32} />
        <div>
          <div className="chat-title">{t.chat.title}</div>
          <div className="chat-status">
            <span className="dot" aria-hidden="true" /> {t.chat.status}
          </div>
        </div>
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
            <button key={s} type="button" className="chip" onClick={() => ask(s)}>
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
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.chat.placeholder}
          autoComplete="off"
        />
        <button type="submit" className="btn btn-sun btn-sm" disabled={busy}>
          {t.chat.send}
        </button>
      </form>
      <a className="handoff" href={waLink(lastQuestion.current)} target="_blank" rel="noopener">
        <ChatIcon /> {t.chat.handoff}
      </a>
    </div>
  );
}

function Hero({ t, lang, money }) {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>{t.hero.title}</h1>
          <p className="lead">{t.hero.sub}</p>
          <div className="cta-row">
            <a className="btn btn-sun" href={waLink()} target="_blank" rel="noopener">
              <ChatIcon /> {t.hero.primary}
            </a>
            <a className="btn btn-ghost" href="#pricing">
              {t.hero.secondary}
            </a>
          </div>
          <p className="proof">{t.hero.proof}</p>
        </div>
        <Chat t={t} lang={lang} money={money} />
      </div>
      <div className="horizon" aria-hidden="true">
        <svg viewBox="0 0 400 170" preserveAspectRatio="xMidYMax meet">
          <g className="sunrise">
            <path d="M80 170 A120 120 0 0 1 320 170 Z" fill="#F2762E" />
            <g stroke="#F7B32B" strokeWidth="8" strokeLinecap="round" fill="#F7B32B">
              <line x1="200" y1="36" x2="200" y2="8" />
              <circle cx="200" cy="-8" r="11" />
              <line x1="104" y1="78" x2="84" y2="58" />
              <circle cx="72" cy="46" r="11" />
              <line x1="296" y1="78" x2="316" y2="58" />
              <circle cx="328" cy="46" r="11" />
            </g>
          </g>
        </svg>
        <div className="horizon-line" />
      </div>
    </section>
  );
}

function Services({ t }) {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <h2>{t.services.title}</h2>
        <ul className="service-list">
          {t.services.items.map((s) => (
            <li key={s.name}>
              <h3>{s.name}</h3>
              <p>{s.what}</p>
              <p className="outcome">{s.outcome}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

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

  const logs = d.script
    .slice(0, shown)
    .filter((m) => m.log)
    .map((m) => m.log);
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
          <button type="button" className="btn btn-line" onClick={play} disabled={running}>
            {done ? d.replay : d.play}
          </button>
        </div>
        <div className="phone" ref={phoneRef}>
          <div className="phone-screen">
            <div className="wa-head">
              <div className="wa-avatar" aria-hidden="true">
                G
              </div>
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

const QUOTE_RECOMMEND = [['booking', 'ai'], ['orders', 'ai'], ['booking', 'ai'], ['orders'], ['booking'], ['booking', 'auto'], []];

function QuoteBuilder({ t, currency, fmt }) {
  const q = t.quote;
  const [type, setType] = useState(0);
  const [picked, setPicked] = useState({ booking: true });
  const [pages, setPages] = useState(0);

  const price = (it) => (currency === 'usd' ? it.usd : it.lkr);
  const base = QUOTE_ITEMS.find((i) => i.base);
  const pageItem = QUOTE_ITEMS.find((i) => i.per);
  const extras = QUOTE_ITEMS.filter((i) => !i.base && !i.per);
  const reco = QUOTE_RECOMMEND[type] || [];

  const chosen = extras.filter((i) => picked[i.id]);
  const total = price(base) + pages * price(pageItem) + chosen.reduce((s, i) => s + price(i), 0);

  const lines = [
    `${q.type}: ${q.types[type]}`,
    `• ${q.items.site}`,
    ...(pages ? [`• ${q.items.pages}: ${pages}`] : []),
    ...chosen.map((i) => `• ${q.items[i.id]}`),
    `${q.total}: ${fmt(total)}`,
  ];
  const message = `${q.msgIntro}\n${lines.join('\n')}`;

  return (
    <section className="section quote-section" id="quote">
      <div className="wrap">
        <h2>{q.title}</h2>
        <p className="muted">{q.sub}</p>
        <div className="quote">
          <div className="quote-form">
            <label className="field">
              {q.type}
              <select value={type} onChange={(e) => setType(Number(e.target.value))}>
                {q.types.map((name, i) => (
                  <option key={name} value={i}>
                    {name}
                  </option>
                ))}
              </select>
            </label>

            <ul className="quote-items">
              <li className="quote-row is-base">
                <span className="q-check" aria-hidden="true" />
                <span className="q-name">{q.items.site}</span>
                <span className="q-tag">{q.included}</span>
                <span className="q-price">{fmt(price(base))}</span>
              </li>
              <li className="quote-row">
                <span className="q-name">{q.items.pages}</span>
                <span className="stepper">
                  <button type="button" aria-label={q.less} onClick={() => setPages(Math.max(0, pages - 1))} disabled={pages === 0}>
                    −
                  </button>
                  <output aria-live="polite">{pages}</output>
                  <button type="button" aria-label={q.more} onClick={() => setPages(Math.min(pageItem.max, pages + 1))}>
                    +
                  </button>
                </span>
                <span className="q-price">{pages ? fmt(pages * price(pageItem)) : `+${fmt(price(pageItem))}`}</span>
              </li>
              {extras.map((it) => (
                <li key={it.id} className="quote-row">
                  <label className="q-label">
                    <input
                      type="checkbox"
                      checked={!!picked[it.id]}
                      onChange={(e) => setPicked({ ...picked, [it.id]: e.target.checked })}
                    />
                    <span className="q-name">
                      {q.items[it.id]}
                      {reco.includes(it.id) && <span className="q-reco">{q.recommended}</span>}
                    </span>
                  </label>
                  <span className="q-price">+{fmt(price(it))}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="quote-total" aria-live="polite">
            <p className="qt-label">{q.total}</p>
            <p className="qt-price">{fmt(total)}</p>
            <ul>
              <li>{q.items.site}</li>
              {pages > 0 && (
                <li>
                  {q.items.pages}: {pages}
                </li>
              )}
              {chosen.map((i) => (
                <li key={i.id}>{q.items[i.id]}</li>
              ))}
            </ul>
            <p className="qt-care">
              {q.care}: {fmt(price(CARE_PLAN))} {t.pricing.perMonth}
            </p>
            <a className="btn btn-sun" href={waLink(message)} target="_blank" rel="noopener">
              <ChatIcon /> {q.send}
            </a>
            <p className="qt-note">{q.note}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Slider({ id, label, value, set, min, max, step, show }) {
  return (
    <div className="slider">
      <div className="slider-top">
        <label htmlFor={id}>{label}</label>
        <output htmlFor={id}>{show}</output>
      </div>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} />
    </div>
  );
}

function Calculator({ t, currency, fmt }) {
  const [msgs, setMsgs] = useState(40);
  const [mins, setMins] = useState(3);
  const [share, setShare] = useState(60);
  const [wageLkr, setWageLkr] = useState(400);
  const [wageUsd, setWageUsd] = useState(8);
  const wage = currency === 'usd' ? wageUsd : wageLkr;
  const hours = Math.round((msgs * mins * 30 * (share / 100)) / 60);
  const value = hours * wage;

  return (
    <section className="section calc-section">
      <div className="wrap calc">
        <div>
          <h2>{t.calc.title}</h2>
          <p className="muted">{t.calc.sub}</p>
          <div className="sliders">
            <Slider id="c-msgs" label={t.calc.msgs} value={msgs} set={setMsgs} min={5} max={300} step={5} show={msgs} />
            <Slider id="c-mins" label={t.calc.mins} value={mins} set={setMins} min={1} max={10} step={1} show={mins} />
            <Slider id="c-share" label={t.calc.share} value={share} set={setShare} min={20} max={90} step={5} show={`${share}%`} />
            {currency === 'usd' ? (
              <Slider id="c-wage" label={t.calc.wage.replace('(Rs.)', '($)')} value={wageUsd} set={setWageUsd} min={2} max={40} step={1} show={`$${wageUsd}`} />
            ) : (
              <Slider id="c-wage" label={t.calc.wage} value={wageLkr} set={setWageLkr} min={100} max={2000} step={50} show={`Rs. ${wageLkr}`} />
            )}
          </div>
        </div>
        <div className="calc-result" aria-live="polite">
          <p className="big">{hours}</p>
          <p className="big-label">{t.calc.hoursOut}</p>
          <p className="mid">{fmt(value)}</p>
          <p className="big-label">{t.calc.moneyOut}</p>
          <p className="calc-note">{t.calc.note}</p>
        </div>
      </div>
    </section>
  );
}

function Work({ t, lang }) {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <h2>{t.work.title}</h2>
        <p className="muted narrow">{t.work.sub}</p>
        <ul className="work-grid">
          {PROJECTS.map((p) => (
            <li key={p.name} className="work-tile" style={{ '--tone': p.tone }}>
              <a href={p.url} target="_blank" rel="noopener">
                <div className="work-visual">
                  {p.image ? <img src={p.image} alt={`${p.name} website`} loading="lazy" /> : <span>{p.name}</span>}
                </div>
                <div className="work-meta">
                  <h3>{p.name}</h3>
                  <p>{p.type[lang]}</p>
                  <p className="work-kind">{p.kind === 'client' ? t.work.client : t.work.concept}</p>
                  <span className="work-open">{t.work.open}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process({ t }) {
  return (
    <section className="section process-section">
      <div className="wrap">
        <h2>{t.process.title}</h2>
        <ol className="steps">
          {t.process.steps.map((s, i) => (
            <li key={s.name}>
              <span className="step-no" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Pricing({ t, currency, setCurrency, money }) {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="pricing-head">
          <div>
            <h2>{t.pricing.title}</h2>
            <p className="muted">{t.pricing.sub}</p>
          </div>
          <div className="toggle" role="group" aria-label="Currency">
            <button type="button" aria-pressed={currency === 'lkr'} onClick={() => setCurrency('lkr')}>
              {t.pricing.lkr}
            </button>
            <button type="button" aria-pressed={currency === 'usd'} onClick={() => setCurrency('usd')}>
              {t.pricing.usd}
            </button>
          </div>
        </div>
        <div className="plans">
          {PLANS.map((p) => {
            const c = t.pricing.plans[p.id];
            return (
              <article key={p.id} className={`plan ${p.featured ? 'featured' : ''}`}>
                {p.featured && <p className="plan-flag">{t.pricing.featured}</p>}
                <h3>{c.name}</h3>
                <p className="plan-for">{c.for}</p>
                <p className="price">
                  <span className="price-from">{t.pricing.from}</span> {money(p)}
                </p>
                <ul>
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <a className={`btn ${p.featured ? 'btn-sun' : 'btn-line'}`} href={waLink(`${c.name}: `)} target="_blank" rel="noopener">
                  {t.pricing.cta}
                </a>
              </article>
            );
          })}
        </div>
        <div className="care">
          <div>
            <h3>{t.pricing.care}</h3>
            <p>{t.pricing.careText}</p>
          </div>
          <p className="care-price">
            {money(CARE_PLAN)} <span>{t.pricing.perMonth}</span>
          </p>
        </div>
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

function Contact({ t }) {
  const [form, setForm] = useState({ name: '', business: '', phone: '', message: '' });
  const [state, setState] = useState('idle');
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setState('required');
      return;
    }
    const text = `Hi Ravion Studio, I'm ${form.name}${form.business ? ` (${form.business})` : ''}.\n${form.message}${form.phone ? `\nWhatsApp: ${form.phone}` : ''}`;
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
        setForm({ name: '', business: '', phone: '', message: '' });
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
          <label>
            {t.contact.name}
            <input value={form.name} onChange={set('name')} autoComplete="name" required />
          </label>
          <label>
            {t.contact.business}
            <input value={form.business} onChange={set('business')} autoComplete="organization" />
          </label>
          <label>
            {t.contact.phone}
            <input value={form.phone} onChange={set('phone')} autoComplete="tel" inputMode="tel" />
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

export default function Page() {
  const [lang, setLangState] = useState('en');
  const [currency, setCurrencyState] = useState('lkr');

  useEffect(() => {
    const l = store('ravion-lang');
    const c = store('ravion-currency');
    if (l === 'si' || l === 'en') setLangState(l);
    if (c === 'usd' || c === 'lkr') setCurrencyState(c);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
  }, [lang]);

  const setLang = (l) => {
    setLangState(l);
    store('ravion-lang', l);
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

  return (
    <>
      <a href="#services" className="skip">
        Skip to content
      </a>
      <Header t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} lang={lang} money={money} />
        <Services t={t} />
        <WhatsAppDemo t={t} lang={lang} />
        <Calculator t={t} currency={currency} fmt={fmt} />
        <Work t={t} lang={lang} />
        <Process t={t} />
        <Pricing t={t} currency={currency} setCurrency={setCurrency} money={money} />
        <QuoteBuilder t={t} currency={currency} fmt={fmt} />
        <Faq t={t} />
        <Contact t={t} />
      </main>
      <footer className="site-footer">
        <div className="wrap footer-row">
          <div className="brand">
            <Mark size={34} framed={false} />
            <span className="brand-name">
              <b>Ravion</b> Studio
            </span>
          </div>
          <p>{t.footer.line}</p>
          <p className="footer-small">
            © {new Date().getFullYear()} {t.footer.rights} · {CONTACT.location}
          </p>
        </div>
      </footer>
      <a className="float-wa" href={waLink()} target="_blank" rel="noopener" aria-label={t.whatsappShort}>
        <ChatIcon />
      </a>
    </>
  );
}
