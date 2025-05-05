import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import FooterHomeFour from './footer-home-four';

describe('FooterHomeFour', () => {
  test('renders the main footer element', () => {
    render(<FooterHomeFour />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders the Discord join button and handles click', () => {
    render(<FooterHomeFour />);
    const discordButton = screen.getByRole('link', { name: /join our discord/i });
    expect(discordButton).toBeInTheDocument();
    fireEvent.click(discordButton);
  });

  test('renders the main heading and description', () => {
    render(<FooterHomeFour />);
    expect(screen.getByText(/Join our NFTs community/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Meet artists & collectors for platform updates/i)
    ).toBeInTheDocument();
  });

  test('renders all main navigation links', () => {
    render(<FooterHomeFour />);
    const links = ['Demos', 'About Us', 'Collections', 'Pages', 'Contact'];
    links.forEach((text) => {
      expect(screen.getByRole('link', { name: new RegExp(text, 'i') })).toBeInTheDocument();
    });
  });
});
