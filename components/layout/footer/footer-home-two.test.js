import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FooterHomeTwo from './footer-home-two';

describe('FooterHomeTwo Unit Test', () => {
  it('renders heading and description', () => {
    render(<FooterHomeTwo />);
    expect(screen.getByText(/Ready for an innovative trading strategy/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Get start now! And buy and sell cryptocurrency/i)
    ).toBeInTheDocument();
  });

  it('renders App Store and Play Store images', () => {
    const { container } = render(<FooterHomeTwo />);
    const images = container.querySelectorAll('img');
    expect(images.length).toBeGreaterThanOrEqual(4); // logo + 2 store buttons + email icon
  });

  it('renders footer email text', () => {
    render(<FooterHomeTwo />);
    expect(screen.getByText(/info@example.com/i)).toBeInTheDocument();
  });

  it('renders copyright', () => {
    render(<FooterHomeTwo />);
    expect(
      screen.getByText(/All Rights Reserved by Mthemeus/i)
    ).toBeInTheDocument();
  });
});
