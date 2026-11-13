import { CONTACT } from '../site-config';

export const metadata = {
  title: 'Privacy Policy | Ravion Studio',
  description: 'How Ravion Studio handles information from our website, chat assistant and contact form.',
  alternates: { canonical: '/privacy' },
};

const UPDATED = '13 November 2026';

export default function Privacy() {
  return (
    <main className="legal">
      <div className="legal-wrap">
        <a className="legal-back" href="/">
          ← Ravion Studio
        </a>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: {UPDATED}</p>

        <p>
          Ravion Studio (&quot;we&quot;, &quot;us&quot;) builds software, apps, websites and AI agents for businesses. This page explains what
          information we collect through ravionstudio.com, why we collect it, and the choices you have.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>
            <b>Chat messages.</b> When you use the chat assistant on this site, your messages and the assistant&apos;s replies are saved with a
            short reference code (for example RV-AB12C), the page language and the time. We don&apos;t ask for your name or number in the chat.
            If you share them, they are saved as part of the conversation.
          </li>
          <li>
            <b>Contact form and estimator.</b> When you send the contact form or an estimate, we receive what you enter: your name, phone
            number, business name, the service you need and your message. Some of these open WhatsApp with your message filled in, and
            nothing is sent until you press send in WhatsApp.
          </li>
          <li>
            <b>WhatsApp and email.</b> If you message or email us, we receive your number or address and what you write.
          </li>
          <li>
            <b>Technical data.</b> Our hosting provider processes your IP address and basic request details to deliver the site, keep it
            secure and stop abuse (for example, limiting how many chat messages can be sent per minute).
          </li>
          <li>
            <b>Your settings.</b> Your currency choice (LKR or USD) is stored in your own browser so the site remembers it. We don&apos;t
            use advertising or tracking cookies.
          </li>
        </ul>

        <h2>Why we use it</h2>
        <ul>
          <li>To answer your questions and give you quotes.</li>
          <li>To continue a chat with you on WhatsApp, using the reference code, without asking you to repeat yourself.</li>
          <li>To improve our services and the chat assistant&apos;s answers.</li>
          <li>To keep the site working and secure.</li>
        </ul>
        <p>We don&apos;t sell your information and we don&apos;t use it for advertising.</p>

        <h2>Services that process it for us</h2>
        <ul>
          <li>
            <b>Google Gemini</b> generates the chat assistant&apos;s replies. Your chat messages are sent to Google for this.
          </li>
          <li>
            <b>Google Workspace (Sheets, Apps Script, Gmail)</b> stores chat logs and sends us email alerts.
          </li>
          <li>
            <b>Cloudflare</b> hosts and protects this website.
          </li>
          <li>
            <b>WhatsApp (Meta)</b> carries messages you choose to send us on WhatsApp.
          </li>
        </ul>
        <p>These providers may store data outside Sri Lanka.</p>

        <h2>How long we keep it</h2>
        <p>
          We keep chat logs and enquiries for up to 12 months, unless they become part of a project with you, in which case we keep
          them for as long as we work together and as required for our records.
        </p>

        <h2>Your choices</h2>
        <p>
          You can ask us what we hold about you, ask us to correct it, or ask us to delete it. Send your request with your chat reference
          code if you have one, and we will respond within 14 days.
        </p>

        <h2>Contact</h2>
        <p>
          WhatsApp: <a href={`https://wa.me/${CONTACT.whatsapp}`}>{CONTACT.whatsappDisplay}</a>
          <br />
          Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <br />
          {CONTACT.location}
        </p>

        <h2>Changes</h2>
        <p>If we change this policy, we will update this page and the date at the top.</p>
      </div>
    </main>
  );
}
