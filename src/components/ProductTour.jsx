import { useState } from 'react';

// Tabbed screenshot tour for the featured project.
export default function ProductTour({ screens, url }) {
  const [active, setActive] = useState(0);
  const screen = screens[active];

  return (
    <div className="tour reveal">
      <div className="tour-head">
        <p className="tour-kicker mono">Product tour</p>
        <div className="tour-tabs" role="tablist" aria-label="DeltaDesk screens">
          {screens.map((s, i) => (
            <button
              key={s.tab}
              type="button"
              role="tab"
              id={`tour-tab-${i}`}
              aria-selected={i === active}
              aria-controls="tour-panel"
              className={`tour-tab${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            >
              {s.tab}
            </button>
          ))}
        </div>
      </div>

      <div className="tour-body" id="tour-panel" role="tabpanel" aria-labelledby={`tour-tab-${active}`}>
        <div className="tour-copy">
          <h3>{screen.title}</h3>
          <p className="muted">{screen.caption}</p>
          <p className="tour-count mono">{String(active + 1).padStart(2, '0')} / {String(screens.length).padStart(2, '0')}</p>
        </div>
        <div className="tour-frame">
          <div className="browser-bar">
            <span className="browser-dots"><i /><i /><i /></span>
            <span className="browser-url">{url}</span>
          </div>
          <a className="tour-stage" href={screen.src} target="_blank" rel="noreferrer" title="Open full size">
            {screens.map((s, i) => (
              <img
                key={s.src}
                src={s.src}
                alt={i === active ? `DeltaDesk ${s.tab.toLowerCase()} screen` : ''}
                aria-hidden={i !== active}
                loading="lazy"
                className={i === active ? 'is-active' : ''}
              />
            ))}
          </a>
        </div>
      </div>
    </div>
  );
}
