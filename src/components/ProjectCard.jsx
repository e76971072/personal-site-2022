import Icon from './Icon';

// Moves the hover spotlight to follow the pointer.
function trackPointer(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
}

export function BrowserFrame({ src, url }) {
  return (
    <div className="browser">
      <div className="browser-bar">
        <span className="browser-dots"><i /><i /><i /></span>
        <span className="browser-url">{url}</span>
      </div>
      <img src={src} alt="" loading="lazy" />
    </div>
  );
}

export function FeaturedProject({ project }) {
  const { title, year, status, tagline, desc, highlights, tags, image, links } = project;
  const primary = links?.[0];
  const host = primary ? new URL(primary.href).host : '';

  return (
    <article className="featured reveal">
      <div className="featured-text">
        <div className="project-meta">
          {status && <span className="badge"><span className="dot" />{status}</span>}
          <span className="mono muted">{year}</span>
        </div>
        <h3 className="featured-title">{title}</h3>
        <p className="featured-tagline">{tagline}</p>
        <p className="muted">{desc}</p>
        <ul className="checks">
          {highlights.map((h) => (
            <li key={h}><Icon name="check" size={16} />{h}</li>
          ))}
        </ul>
        <ul className="tags">
          {tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <div className="featured-actions">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className={`btn ${i === 0 ? 'btn--light' : 'btn--ghost'}`}
            >
              {l.label} <Icon name="external" size={15} />
            </a>
          ))}
        </div>
      </div>
      <div className="featured-media">
        <div className="featured-glow" aria-hidden="true" />
        <BrowserFrame src={image} url={host} />
      </div>
    </article>
  );
}

export default function ProjectCard({ project }) {
  const { title, year, tagline, desc, tags, image, links } = project;
  const primary = links?.[0];

  return (
    <article className="card project-card reveal" onPointerMove={trackPointer}>
      <div className="project-media">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span className="mono muted">{year}</span>
        </div>
        <h3>
          {primary ? (
            <a href={primary.href} target="_blank" rel="noreferrer" className="stretched">
              {title}
              <Icon name="arrowUpRight" size={16} />
            </a>
          ) : title}
        </h3>
        <p className="project-tagline">{tagline}</p>
        <p className="muted project-desc">{desc}</p>
        <ul className="tags">
          {tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </article>
  );
}
