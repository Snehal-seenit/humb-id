import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutSection from '../../components/about/about-section';

describe('Header Component', () => {
  test('renders the title correctly', () => {
    render(<AboutSection />);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent("Empowering Indonesia’s Crypto Traders with a Next-Gen Exchange");
  });
});
