import positions from '../data/resume/positions';
import degrees from '../data/resume/degrees';
import skills from '../data/resume/skills';

export function ExperienceList() {
  return (
    <ol className="exp-list">
      {positions.map((job) => (
        <li key={job.company + job.daterange} className="exp-item reveal">
          <p className="exp-date mono">{job.daterange}</p>
          <div>
            <h3>{job.position}</h3>
            <p className="exp-company">
              <a href={job.link} target="_blank" rel="noreferrer">{job.company}</a>
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function EducationList() {
  return (
    <div className="edu-grid">
      {degrees.map((d) => (
        <a key={d.school} href={d.link} target="_blank" rel="noreferrer" className="card edu-card reveal">
          <p className="mono muted">{d.year}</p>
          <h3>{d.degree}</h3>
          <p className="muted">{d.school}</p>
        </a>
      ))}
    </div>
  );
}

export function SkillsGrid() {
  return (
    <div className="skills-grid">
      {skills.map((g) => (
        <div key={g.group} className="card skill-card reveal">
          <h3 className="mono">{g.group}</h3>
          <ul className="tags">
            {g.items.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
