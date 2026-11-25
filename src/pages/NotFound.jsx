import { Link } from 'react-router-dom';
import usePageTitle from '../components/usePageTitle';

export default function NotFound() {
  usePageTitle('Page not found');

  return (
    <div className="container page page--center">
      <p className="eyebrow mono">404</p>
      <h1 data-testid="heading">Page not found</h1>
      <p className="page-lead">That page doesn&apos;t exist, or it moved.</p>
      <Link to="/" className="btn btn--light">Back home</Link>
    </div>
  );
}
