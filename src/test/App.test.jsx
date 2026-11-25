import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

const pages = [
  { route: '/', heading: 'Kevin Nguyen' },
  { route: '/projects', heading: 'Projects' },
  { route: '/resume', heading: 'Résumé' },
  { route: '/about', heading: 'About me' },
  { route: '/contact', heading: 'Get in touch' },
  { route: '/nope', heading: 'Page not found' },
];

describe('routes', () => {
  it.each(pages)('renders $route', ({ route, heading }) => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('heading')).toHaveTextContent(heading);
  });

  it('features DeltaDesk on the home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: 'DeltaDesk' })).toBeInTheDocument();
  });
});
