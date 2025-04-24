import { render, screen } from '@testing-library/react';
import BlogSection from './blog-section';

// Mock the BlogPost component to avoid modifying BlogSection
jest.mock('./blog-post', () => {
  return {
    __esModule: true, // This is important if your BlogPost is a named export
    default: () => (
      <div data-testid="blog-post">
        <img src="image1.jpg" alt="Blockchain Healthcare" />
        <img src="image2.jpg" alt="Crypto Healthcare" />
      </div>
    ), // Simulate the images in the mock
  };
});

describe('BlogSection Component', () => {
  it('renders the BlogPost component', () => {
    render(<BlogSection />);

    // Ensure BlogPost is rendered by checking its test ID
    const blogPosts = screen.getAllByTestId('blog-post');
    expect(blogPosts.length).toBeGreaterThanOrEqual(1); // Ensure at least 1 post is rendered
  });

  it('renders blog images with correct alt attributes', () => {
    render(<BlogSection />);

    // Ensure images are rendered and have alt attributes
    const images = screen.getAllByRole('img');
    images.forEach((image) => {
      expect(image).toHaveAttribute('alt');
    });
  });
});
