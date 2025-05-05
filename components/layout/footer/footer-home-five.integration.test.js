import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import FooterHomeFive from './footer-home-five';

// Mock Next.js Link component properly
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => {
    const handleClick = (e) => {
      e.preventDefault();
      global.__lastNavigation = href;
    };
    return <a href={href} onClick={handleClick}>{children}</a>;
  },
}));

describe('FooterHomeFive Integration Tests', () => {
  beforeEach(() => {
    // Reset navigation tracking before each test
    global.__lastNavigation = undefined;
    render(<FooterHomeFive />);
  });

  test('logo is rendered correctly', () => {
    const images = document.querySelectorAll('img');
    const logo = Array.from(images).find(img => 
      img.classList.contains('light-version-logo') && 
      img.src.includes('logo-white.svg')
    );
    expect(logo).toBeInTheDocument();
  });

  test('social media links navigate correctly', () => {
    const socialLinks = screen.getAllByRole('link').filter(link => 
      link.querySelector('img[src*="social2"]')
    );
    expect(socialLinks.length).toBeGreaterThanOrEqual(4);
    
    fireEvent.click(socialLinks[0]);
    expect(global.__lastNavigation).toBe('#');
  });

  test('marketplace links navigate correctly', () => {
    const marketplaceLink = screen.getByText('Create A Store');
    fireEvent.click(marketplaceLink);
    expect(global.__lastNavigation).toBe('#');
  });

  test('category links navigate correctly', () => {
    const categoryLink = screen.getByText('Art');
    fireEvent.click(categoryLink);
    expect(global.__lastNavigation).toBe('#');
  });

  test('contact information links work', () => {
    const emailLink = screen.getByText(/example@gmail\. com/i);
    fireEvent.click(emailLink);
    expect(global.__lastNavigation).toBe('#');
  });

  test('legal links navigate correctly', () => {
    const termsLink = screen.getByText('Terms');
    fireEvent.click(termsLink);
    expect(global.__lastNavigation).toBe('#');
  });

  test('copyright information is displayed', () => {
    expect(screen.getByText(/Copyright 2022/i)).toBeInTheDocument();
  });
});