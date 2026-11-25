import Icon from '../components/Icon';
import usePageTitle from '../components/usePageTitle';
import profile from '../data/profile';

export default function Contact() {
  usePageTitle('Contact');

  return (
    <div className="container page">
      <header className="page-head reveal">
        <p className="eyebrow mono">Contact</p>
        <h1 data-testid="heading">Get in touch</h1>
        <p className="page-lead">
          The best way to reach me is email. I usually reply within a day or two.
          If you&apos;d like my résumé, email me and I&apos;ll send the latest copy.
        </p>
      </header>
      <div className="contact-grid">
        {profile.socials.map((s) => (
          <a key={s.label} className="card contact-card reveal" href={s.href} target="_blank" rel="noreferrer">
            <span className="contact-icon"><Icon name={s.icon} size={20} /></span>
            <span className="contact-label">{s.label}</span>
            <span className="muted contact-value">
              {s.icon === 'email' ? profile.email : s.href.replace(/^https?:\/\/(www\.)?/, '')}
            </span>
            <span className="contact-arrow"><Icon name="arrowUpRight" size={18} /></span>
          </a>
        ))}
      </div>
    </div>
  );
}
