import { notFound } from 'next/navigation';
import { CONTACT } from '../../site-config';
import { SERVICES, SITE, serviceBySlug, sol, rs, usd, waLink, industriesFor } from '../data';
import { SvcHeader, SvcFooter, Icon, ICON_FOR } from '../chrome';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const svc = serviceBySlug(slug);
  if (!svc) return {};
  const url = `/services/${svc.slug}`;
  return {
    title: svc.title,
    description: svc.description,
    alternates: { canonical: url },
    openGraph: { title: svc.title, description: svc.description, url, type: 'website', images: ['/og.png'], siteName: 'Ravion Studio' },
    twitter: { card: 'summary_large_image', title: svc.title, description: svc.description },
  };
}

const PROCESS = [
  ['Free discovery call', 'We learn how your business works and what needs fixing.'],
  ['Design & prototype', 'You click through the screens before any code is written.'],
  ['Build in short sprints', 'Working progress every week, so there are no surprises.'],
  ['Launch & training', 'We move your data in and train your team.'],
  ['Support & growth', 'Hosting, backups, fixes and new features.'],
];

function schema(svc, s) {
  const url = `${SITE}/services/${svc.slug}`;
  const prices = s.tiers.map((t) => t.lkr);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: s.name.en,
      serviceType: s.name.en,
      description: svc.description,
      url,
      areaServed: [{ '@type': 'Country', name: 'Sri Lanka' }, 'Worldwide'],
      availableLanguage: ['en', 'si'],
      provider: {
        '@type': 'ProfessionalService',
        name: 'Ravion Studio',
        url: SITE,
        telephone: '+' + CONTACT.call,
        email: CONTACT.email,
        address: { '@type': 'PostalAddress', addressLocality: 'Kuliyapitiya', addressCountry: 'LK' },
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'LKR',
        lowPrice: Math.min(...prices),
        highPrice: Math.max(...prices),
        offerCount: s.tiers.length,
        offers: s.tiers.map((t) => ({
          '@type': 'Offer',
          name: `${s.name.en} – ${t.name.en}`,
          price: t.lkr,
          priceCurrency: 'LKR',
          description: t.items.map((i) => i.en).join(', '),
          url,
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
        { '@type': 'ListItem', position: 3, name: s.name.en, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: svc.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const svc = serviceBySlug(slug);
  if (!svc) notFound();
  const s = sol(svc.id);
  const inds = industriesFor(svc);
  const others = SERVICES.filter((x) => x.slug !== svc.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(svc, s)) }} />
      <SvcHeader />
      <main className="svc">
        {/* Hero */}
        <section className="svc-hero">
          <div className="wrap">
            <nav className="svc-crumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/services">Services</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{s.name.en}</span>
            </nav>
            <div className="svc-hero-grid">
              <div>
                <p className="svc-kicker">
                  <Icon name={ICON_FOR[svc.id]} size={18} /> {s.name.en}
                </p>
                <h1>{svc.h1}</h1>
                <p className="svc-intro">{svc.intro}</p>
                <div className="svc-ctas">
                  <a className="btn btn-sun" href={waLink(svc.wa)} target="_blank" rel="noopener">
                    <Icon name="wa" size={18} /> Chat on WhatsApp
                  </a>
                  <a className="btn btn-line-light" href="/#estimate">
                    Estimate your price
                  </a>
                </div>
              </div>
              <aside className="svc-pricecard" aria-label="Starting price">
                <p className="svc-pricecard-label">Plans from</p>
                <p className="svc-pricecard-price">{rs(s.tiers[0].lkr)}</p>
                <p className="svc-pricecard-usd">about {usd(s.tiers[0].usd)} for clients abroad</p>
                <ul>
                  {svc.highlights.map((h) => (
                    <li key={h}>
                      <Icon name="check" size={16} /> {h}
                    </li>
                  ))}
                </ul>
                <p className="svc-pricecard-note">50% to start, 50% at launch. Exact price after a free call.</p>
              </aside>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="svc-section">
          <div className="wrap">
            <h2>What we build</h2>
            <div className="svc-features">
              {svc.features.map((f) => (
                <article key={f.name} className="svc-feature">
                  <h3>{f.name}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="svc-section svc-pricing" id="plans">
          <div className="wrap">
            <h2>{s.name.en} prices</h2>
            <p className="muted">Starting prices in Sri Lankan rupees. Clients abroad pay the USD price shown.</p>
            <div className="plans svc-plans">
              {s.tiers.map((t) => (
                <article key={t.name.en} className={`plan ${t.featured ? 'featured' : ''}`}>
                  <div className="plan-top">
                    <h3>{t.name.en}</h3>
                    {t.featured && <p className="plan-flag">Most chosen</p>}
                  </div>
                  <p className="price">
                    <span className="price-from">from</span> {rs(t.lkr)}
                  </p>
                  <p className="svc-plan-usd">{usd(t.usd)} for clients abroad</p>
                  <ul>
                    {t.items.map((it) => (
                      <li key={it.en}>
                        <Icon name="check" size={16} /> {it.en}
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`btn ${t.featured ? 'btn-sun' : 'btn-line'}`}
                    href={waLink(`${s.name.en} – ${t.name.en}: `)}
                    target="_blank"
                    rel="noopener"
                  >
                    Ask about this plan
                  </a>
                </article>
              ))}
            </div>
            <div className="care">
              <p>
                <b>Hosting, updates and support</b>
              </p>
              <p className="care-price">
                from {rs(s.care.lkr)} <span>/ month</span>
              </p>
            </div>
            {(svc.id === 'pos' || svc.id === 'management') && (
              <p className="pay-note">Hardware such as computers, barcode scanners and receipt printers is not included. We help you choose and set it up.</p>
            )}
          </div>
        </section>

        {/* Plan guide */}
        <section className="svc-section">
          <div className="wrap svc-guide">
            <div>
              <h2>{svc.guide.title}</h2>
              <p className="muted">{svc.guide.intro}</p>
              <h3 className="svc-list-title">{svc.guide.listTitle}</h3>
              <ul className="svc-chips">
                {svc.guide.list.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
            <table className="svc-table">
              <thead>
                <tr>
                  <th scope="col">If you need</th>
                  <th scope="col">Choose</th>
                </tr>
              </thead>
              <tbody>
                {svc.guide.rows.map((r) => (
                  <tr key={r.need}>
                    <td>{r.need}</td>
                    <td>
                      <b>{r.plan}</b>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Industries */}
        {inds.length > 0 && (
          <section className="svc-section">
            <div className="wrap">
              <h2>Built for businesses like yours</h2>
              <div className="svc-inds">
                {inds.map((i) => (
                  <article key={i.id} className="svc-ind">
                    <h3>{i.name.en}</h3>
                    <ul>
                      {i.items.map((it) => (
                        <li key={it.en}>{it.en}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Work */}
        {svc.work.length > 0 && (
          <section className="svc-section">
            <div className="wrap">
              <h2>{svc.id === 'website' ? 'Websites we have designed' : 'Our work'}</h2>
              <div className="svc-work">
                {svc.work.map((w) => (
                  <article key={w.name} className="svc-workcard">
                    <p className="svc-worklabel">{w.label}</p>
                    <h3>{w.name}</h3>
                    <p>{w.text}</p>
                    {w.url && (
                      <a href={w.url} target="_blank" rel="noopener">
                        {w.url.startsWith('https://wa.me') ? 'Open WhatsApp' : 'Visit'} <Icon name="external" size={15} />
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Process */}
        <section className="svc-section svc-process">
          <div className="wrap">
            <h2>How it works</h2>
            <ol className="svc-steps">
              {PROCESS.map(([name, text], i) => (
                <li key={name}>
                  <span className="svc-step-n">{i + 1}</span>
                  <h3>{name}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="svc-section">
          <div className="wrap faq-wrap">
            <div>
              <h2>Questions</h2>
              <p className="muted">
                Something else? Ask us on{' '}
                <a href={waLink(svc.wa)} target="_blank" rel="noopener">
                  WhatsApp
                </a>
                .
              </p>
            </div>
            <div className="faq-list">
              {svc.faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Sinhala */}
        <section className="svc-section svc-si" lang="si">
          <div className="wrap">
            <h2>{svc.si.title}</h2>
            <p>{svc.si.text}</p>
          </div>
        </section>

        {/* CTA + other services */}
        <section className="svc-cta">
          <div className="wrap">
            <h2>Tell us what you need</h2>
            <p>A free call, a clear price and a timeline. No pressure.</p>
            <div className="svc-ctas">
              <a className="btn btn-sun" href={waLink(svc.wa)} target="_blank" rel="noopener">
                <Icon name="wa" size={18} /> WhatsApp {CONTACT.whatsappDisplay}
              </a>
              <a className="btn btn-line-light" href={`tel:+${CONTACT.call}`}>
                Call {CONTACT.callDisplay}
              </a>
            </div>
            <div className="svc-others">
              <p>Other services</p>
              <ul>
                {others.map((o) => (
                  <li key={o.slug}>
                    <a href={`/services/${o.slug}`}>
                      {sol(o.id).name.en} <Icon name="arrow" size={15} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SvcFooter />
    </>
  );
}
