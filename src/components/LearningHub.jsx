import Icon from './Icon';

const courseUrl = (slug) => `https://deltadesks.com/blog/course/${slug}`;

export default function LearningHub({ learning }) {
  const { intro, courses, libraries } = learning;

  return (
    <div className="learning reveal">
      <div className="learning-head">
        <div>
          <p className="learning-kicker mono">DeltaDesk Learn</p>
          <h3>Research the markets with confidence, whatever your level</h3>
          <p className="muted">{intro}</p>
        </div>
        <a href={courseUrl(courses[0].slug)} target="_blank" rel="noreferrer" className="btn btn--ghost">
          Start learning <Icon name="arrowRight" size={15} />
        </a>
      </div>

      <ol className="course-grid">
        {courses.map((c, i) => (
          <li key={c.slug}>
            <a href={courseUrl(c.slug)} target="_blank" rel="noreferrer" className="course-card">
              <span className="course-num mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="course-name">{c.name}</span>
              <span className="course-blurb">{c.blurb}</span>
              <span className="course-level mono">{c.level}</span>
            </a>
          </li>
        ))}
      </ol>

      <div className="libraries">
        <span className="muted">Strategy libraries with interactive payoff charts:</span>
        {libraries.map((l) => (
          <a key={l.slug} href={courseUrl(l.slug)} target="_blank" rel="noreferrer">
            {l.name} <Icon name="arrowUpRight" size={13} />
          </a>
        ))}
      </div>
    </div>
  );
}
