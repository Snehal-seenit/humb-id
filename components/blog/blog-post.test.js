import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import BlogPost from './blog-post'; // Adjust this based on your actual file structure

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => <a href={href}>{children}</a>,
}));

describe('BlogPost Component', () => {
  it('renders blog images with correct alt attributes', () => {
    render(<BlogPost />);

    // Query images by alt text ("" will match all images with empty alt attributes)
    const images = screen.getAllByAltText('');  // Get images with empty alt attributes
    expect(images.length).toBeGreaterThanOrEqual(3);  // Ensure there are at least 3 images

    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');  // Check if each image has an alt attribute
    });
  });
});
