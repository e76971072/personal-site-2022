import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import SectionHead from '../components/SectionHead';
import { ExperienceList, EducationList, SkillsGrid } from '../components/ResumeParts';
import usePageTitle from '../components/usePageTitle';
import profile from '../data/profile';
import courses from '../data/resume/courses';

export default function Resume() {
  usePageTitle('Experience');

  return (
    <div className="container page">
      <header className="page-head page-head--row reveal">
        <div>
          <p className="eyebrow mono">Experience</p>
          <h1 data-testid="heading">Résumé</h1>
          <p className="page-lead">{profile.role} · {profile.company}</p>
        </div>
        <Link to="/contact" className="btn btn--light">
          <Icon name="email" size={16} /> Request my résumé
        </Link>
      </header>

      <section className="section section--tight">
        <SectionHead label="01" title="Experience" />
        <ExperienceList />
      </section>

      <section className="section section--tight">
        <SectionHead label="02" title="Education" />
        <EducationList />
      </section>

      <section className="section section--tight">
        <SectionHead label="03" title="Skills & tools" />
        <SkillsGrid />
      </section>

      <section className="section section--tight">
        <SectionHead label="04" title="Selected coursework" />
        <ul className="card card--pad course-list reveal">
          {courses.map((c) => (
            <li key={c.number}>
              <span className="mono muted">{c.number}</span>
              {c.link ? <a href={c.link} target="_blank" rel="noreferrer">{c.title}</a> : <span>{c.title}</span>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
