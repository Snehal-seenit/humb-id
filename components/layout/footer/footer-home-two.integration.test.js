import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FooterHomeTwo from './footer-home-two';

describe('FooterHomeTwo Integration Test', () => {
  it('renders footer with logo, nav menu, contact email, and links', () => {
    const { container } = render(<FooterHomeTwo />);

    // Logo
    const logo = container.querySelector('.fugu-footer-logo img');
    expect(logo).toBeInTheDocument();

    // Menu links
    expect(screen.getByText(/Demos/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Collections/i)).toBeInTheDocument();
    expect(screen.getByText(/Pages/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();

    // Email section
    expect(screen.getByText(/info@example.com/i)).toBeInTheDocument();

    // Bottom links
    expect(screen.getByText(/Terms/i)).toBeInTheDocument();
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
  });
});
