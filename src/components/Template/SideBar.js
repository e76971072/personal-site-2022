import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Kevin A&apos;Nguyen</h2>
        <p><a href="mailto:kevin.at.nguyenn@gmail.com">kevin.at.nguyenn@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Kevin. I like building things.
        I am a <a href="https://www.utsa.edu/" style={{ color: 'orange' }}>UTSA</a> Alumni.
        I received my B.S. from <a href="https://arthena.com">UTSA</a>. Over the past summers, I interned at Poly and GPM Life.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Kevin A&apos;Nguyen <Link to="/">kevindream.me</Link>.</p>
    </section>
  </section>
);

export default SideBar;
