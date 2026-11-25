import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import ProjectCard, { FeaturedProject } from '../components/ProjectCard';
import SectionHead from '../components/SectionHead';
import LearningHub from '../components/LearningHub';
import ProductTour from '../components/ProductTour';
import { ExperienceList, EducationList, SkillsGrid } from '../components/ResumeParts';
import usePageTitle from '../components/usePageTitle';
import profile from '../data/profile';
import projects from '../data/projects';

const yearsInIndustry = Math.floor((Date.now() - new Date('2019-02-01')) / (365.25 * 24 * 3600 * 1000));

const stats = [
  { value: `${yearsInIndustry}+`, label: 'years building software' },
  { value: String(projects.length), label: 'projects shipped' },
  { value: 'M.S. CS', label: 'UIUC, Dec 2025' },
  { value: '1st', label: 'place, Canon Hackathon' },
];

export default function Home() {
  usePageTitle();
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured).slice(0, 3);

  return (
    <>
      <section className="hero container">
        <div className="hero-index reveal">
          <span className="mono">00 / Index</span>
          <span className="mono">Portfolio · {new Date().getFullYear()}</span>
        </div>
        <h1 className="hero-title reveal" data-testid="heading">{profile.name}</h1>
        <div className="hero-grid reveal">
          <p className="hero-sub">
            Senior software engineer building scalable systems for financial services at {profile.company}, and
            {' '}<a href="https://deltadesks.com" target="_blank" rel="noreferrer">DeltaDesk</a>, an analytics and
            quantitative research platform for every investor.
          </p>
          <dl className="hero-meta">
            <div><dt className="mono">Currently</dt><dd>{profile.role}, {profile.company}</dd></div>
            <div><dt className="mono">Building</dt><dd>DeltaDesk</dd></div>
            <div><dt className="mono">Education</dt><dd>M.S. Computer Science, UIUC</dd></div>
          </dl>
        </div>
        <div className="hero-actions reveal">
          <Link to="/projects" className="btn btn--light">
            View my work <Icon name="arrowRight" size={16} />
          </Link>
          <Link to="/contact" className="btn btn--ghost">
            Get in touch
          </Link>
          <div className="hero-socials">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                <Icon name={s.icon} />
              </a>
            ))}
          </div>
        </div>
        <dl className="stats reveal">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section container" id="work">
        <SectionHead label="01 / Featured" title="What I'm building now" />
        <FeaturedProject project={featured} />
        {featured.screens && <ProductTour screens={featured.screens} url="deltadesks.com" />}
        {featured.learning && <LearningHub learning={featured.learning} />}
      </section>

      <section className="section container">
        <SectionHead label="02 / Projects" title="Selected work">
          <Link to="/projects" className="link-arrow">
            All projects <Icon name="arrowRight" size={14} />
          </Link>
        </SectionHead>
        <div className="project-grid">
          {others.map((p) => <ProjectCard key={p.title} project={p} />)}
        </div>
      </section>

      <section className="section container">
        <SectionHead label="03 / Experience" title="Where I've worked">
          <Link to="/resume" className="link-arrow">
            Full experience <Icon name="arrowRight" size={14} />
          </Link>
        </SectionHead>
        <ExperienceList />
      </section>

      <section className="section container">
        <SectionHead label="04 / Education" title="Education" />
        <EducationList />
      </section>

      <section className="section container">
        <SectionHead label="05 / Toolbox" title="Skills & tools" />
        <SkillsGrid />
      </section>

      <section className="section container">
        <div className="cta reveal">
          <p className="section-index mono">06 / Contact</p>
          <h2>Let&apos;s build something together.</h2>
          <p className="muted">
            Fintech, quantitative research, side projects or new roles: my inbox is open.
          </p>
          <div className="hero-actions">
            <a href={`mailto:${profile.email}`} className="btn btn--light">
              <Icon name="email" size={16} /> {profile.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
