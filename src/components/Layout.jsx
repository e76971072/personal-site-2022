import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Icon from './Icon';
import profile from '../data/profile';

const nav = [
  { to: '/projects', label: 'Work' },
  { to: '/resume', label: 'Experience' },
  { to: '/about', label: 'About' },
];

// Fade elements marked .reveal in as they scroll into view.
function useReveal(pathname) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return undefined;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
}

// Light by default; the choice is remembered per browser.
function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === 'dark');

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) document.documentElement.dataset.theme = 'dark';
    else delete document.documentElement.dataset.theme;
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // storage unavailable; the choice just won't persist
    }
  };

  return (
    <button
      type="button"
      className="theme-btn"
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <Icon name={dark ? 'sun' : 'moon'} size={16} />
    </button>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useReveal(pathname);

  return (
    <>
      <div className="bg" aria-hidden="true">
        <div className="container bg-cols">
          {Array.from({ length: 12 }, (_, i) => <span key={i} />)}
        </div>
      </div>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="nav-shell">
          <Link to="/" className="brand" onClick={close} aria-label={`${profile.name}, home`}>
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-name">{profile.name}</span>
            <span className="brand-role mono">{profile.role}</span>
          </Link>
          <nav className={`site-nav${open ? ' is-open' : ''}`} aria-label="Main">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={close}>{item.label}</NavLink>
            ))}
          </nav>
          <ThemeToggle />
          <Link to="/contact" className="btn btn--sm btn--light nav-cta" onClick={close}>
            Contact <Icon name="arrowUpRight" size={14} />
          </Link>
          <button
            type="button"
            className="menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="footer-name">{profile.name}</p>
          <div className="footer-cols">
            <div>
              <p className="footer-label mono">Role</p>
              <p>{profile.role}, {profile.company}</p>
            </div>
            <div>
              <p className="footer-label mono">Index</p>
              <ul className="footer-links">
                {nav.map((item) => <li key={item.to}><Link to={item.to}>{item.label}</Link></li>)}
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="footer-label mono">Elsewhere</p>
              <ul className="footer-links">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer">{s.label} <Icon name="arrowUpRight" size={13} /></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="container footer-base mono">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Built with React &amp; Vite</p>
        </div>
      </footer>
    </>
  );
}
