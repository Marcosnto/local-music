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
    const place = {
      id: '1',
      name: 'Petrópolis',
      slug: 'petropolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    };
    const place2 = {
      id: '2',
      name: 'Aracaju',
      slug: 'aracaju',
      location: {
        latitude: 1,
        longitude: 2
      }
    };

    render(<Map places={[place, place2]} />);

    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument();
    expect(screen.getByTitle(/aracaju/i)).toBeInTheDocument();
  });
});
