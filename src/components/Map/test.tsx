import { render, screen } from '@testing-library/react';
import Map from '.';

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    );
  });

  it('should render with the marker in correct place', () => {
    const artist1 = {
      id: '1',
      name: 'Pabllo Vittar',
      slug: 'pabllo-vittar',
      location: {
        latitude: 0,
        longitude: 0
      }
    };
    const artist2 = {
      id: '2',
      name: 'Gloria Groove',
      slug: 'gloria-groove',
      location: {
        latitude: 1,
        longitude: 2
      }
    };

    render(<Map artists={[artist1, artist2]} />);

    expect(screen.getByTitle(/pabllo vittar/i)).toBeInTheDocument();
    expect(screen.getByTitle(/gloria groove/i)).toBeInTheDocument();
  });
});
