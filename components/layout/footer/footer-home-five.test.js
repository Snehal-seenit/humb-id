import { render, screen } from '@testing-library/react';
import React from 'react';
import FooterHomeFive from './footer-home-five';

describe('FooterHomeFive Unit Tests', () => {
  beforeEach(() => {
    render(<FooterHomeFive />);
  });

  test('renders logo correctly', () => {
    // Get all images and find the one with the specific class and src
    const images = document.querySelectorAll('img');
    const logo = Array.from(images).find(img => 
      img.classList.contains('light-version-logo') && 
      img.src.includes('logo-white.svg')
    );
    
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/logo/logo-white.svg');
  });

  test('renders description text', () => {
    const description = screen.getByText(/Discover NFTs by category/i);
    expect(description).toBeInTheDocument();
  });

  test('renders social media icons', () => {
    const socialLinks = screen.getAllByRole('link');
    const socialIcons = socialLinks.filter(link => 
      link.querySelector('img[src*="social2"]')
    );
    expect(socialIcons.length).toBeGreaterThanOrEqual(4);
  });

  test('renders marketplace links', () => {
    const marketplaceHeaders = screen.getAllByText('Marketplace');
    expect(marketplaceHeaders.length).toBe(3);
  });

  test('renders contact information', () => {
    expect(screen.getByText(/example@gmail\. com/i)).toBeInTheDocument();
    expect(screen.getByText(/6391 Elgin St. Celina, New York City/i)).toBeInTheDocument();
  });

  test('renders copyright text', () => {
    expect(screen.getByText(/Copyright 2022/i)).toBeInTheDocument();
  });

  test('renders terms and privacy links', () => {
    expect(screen.getByText('Terms')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });
});