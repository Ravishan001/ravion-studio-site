// Header, footer and icons for the service pages (server-rendered, no JavaScript needed).
import { CONTACT } from '../site-config';
import { SERVICES, waLink } from './data';

export function Mark({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
      <rect width="120" height="120" rx="28" fill="#101632" />
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

const PATHS = {
  check: 'M5 12.5l4.5 4.5L19 7',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  wa: 'M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z',
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  pos: 'M4 5h16v9H4zM8 18h8M12 14v4M7 9h4',
  phone: 'M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z',
  spark: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z',
  external: 'M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5',
};
export const ICON_FOR = { management: 'grid', pos: 'pos', mobile: 'phone', website: 'globe', ai: 'spark' };

export function Icon({ name, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={PATHS[name]} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SvcHeader() {
  return (
    <header className="site-header is-scrolled">
      <div className="wrap header-row">
        <a href="/" className="brand" aria-label="Ravion Studio home">
          <Mark size={34} />
          <span className="brand-name">
            <b>Ravion</b> Studio
          </span>
        </a>
        <nav className="nav svc-nav" aria-label="Main">
          <a href="/services">Services</a>
          <a href="/#work">Work</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#estimate">Estimate</a>
          <a href="/blog">Blog</a>
          <a href="/#contact">Contact</a>
        </nav>
        <div className="header-actions svc-header-actions">
          <a className="btn btn-sun btn-sm" href={waLink('Hi Ravion Studio')} target="_blank" rel="noopener">
            <Icon name="wa" size={18} /> WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

export function SvcFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <a href="/" className="brand" style={{ color: 'inherit' }}>
            <Mark size={34} />
            <span className="brand-name">
              <b>Ravion</b> Studio
            </span>
          </a>
          <p className="footer-line">Software, apps, websites and AI agents for businesses.</p>
        </div>
        <nav className="footer-nav" aria-label="Services">
          {SERVICES.map((s) => (
            <a key={s.slug} href={`/services/${s.slug}`}>
              {s.short}
            </a>
          ))}
        </nav>
        <div className="footer-contact">
          <a href={waLink()} target="_blank" rel="noopener">
            WhatsApp {CONTACT.whatsappDisplay}
          </a>
          <a href={`tel:+${CONTACT.call}`}>Call {CONTACT.callDisplay}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href="/blog">Blog</a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} Ravion Studio, Kuliyapitiya, {CONTACT.location}</p>
        <a href="/privacy">Privacy policy</a>
      </div>
    </footer>
  );
}
