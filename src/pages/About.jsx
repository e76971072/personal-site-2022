import Markdown from 'react-markdown';
import usePageTitle from '../components/usePageTitle';
import profile from '../data/profile';
import about from '../data/about.md?raw';
import photo from '../data/resume/pics/profile.jpeg';

const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer">{children}</a>
);

export default function About() {
  usePageTitle('About');

  return (
    <div className="container page">
      <header className="page-head reveal">
        <p className="eyebrow mono">About</p>
        <h1 data-testid="heading">About me</h1>
      </header>
      <div className="about">
        <figure className="about-photo reveal">
          <div className="about-photo-frame">
            <img src={photo} alt={profile.name} width="400" height="400" />
          </div>
          <figcaption>
            <strong>{profile.name}</strong>
            <span className="muted">{profile.role} · {profile.company}</span>
          </figcaption>
        </figure>
        <div className="card card--pad prose reveal">
          <Markdown components={{ a: ExternalLink }}>{about}</Markdown>
        </div>
      </div>
    </div>
  );
}
