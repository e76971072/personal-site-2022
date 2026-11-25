import ProjectCard, { FeaturedProject } from '../components/ProjectCard';
import LearningHub from '../components/LearningHub';
import ProductTour from '../components/ProductTour';
import usePageTitle from '../components/usePageTitle';
import projects from '../data/projects';

export default function Projects() {
  usePageTitle('Work');
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="container page">
      <header className="page-head reveal">
        <p className="eyebrow mono">Work</p>
        <h1 data-testid="heading">Projects</h1>
        <p className="page-lead">
        </p>
      </header>
      {featured.map((p) => (
        <div key={p.title}>
          <FeaturedProject project={p} />
          {p.screens && <ProductTour screens={p.screens} url="deltadesks.com" />}
          {p.learning && <LearningHub learning={p.learning} />}
        </div>
      ))}
      <div className="project-grid project-grid--spaced">
        {rest.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
    </div>
  );
}
