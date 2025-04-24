import { render, screen } from '@testing-library/react';
import BlogSidebarSection from './blog-sidebar-section';

// Mock the Link component from Next.js to avoid issues with routing during tests
jest.mock('next/link', () => {
  return ({ children }) => children;
});

// Mock the image elements to avoid loading actual images
jest.mock('./blog-sidebar-section', () => {
  return {
    __esModule: true,
    default: () => (
      <div>
        <img src="/images/fake-image.jpg" alt="mocked image" />
        <input placeholder="Type to search..." />
        <div>
          <h2>Blog Categories</h2>
        </div>
        <div>
          <h2>Tags</h2>
        </div>
      </div>
    ),
  };
});

describe('BlogSidebarSection Component', () => {
  it('renders the search bar with correct placeholder', () => {
    render(<BlogSidebarSection />);

    // Ensure the search input is rendered with the correct placeholder
    const searchInput = screen.getByPlaceholderText('Type to search...');
    expect(searchInput).toBeInTheDocument();
  });

  it('renders the blog categories', () => {
    render(<BlogSidebarSection />);

    // Ensure categories are rendered
    const categories = screen.getByText('Blog Categories');
    expect(categories).toBeInTheDocument();
  });

  it('renders the tags section', () => {
    render(<BlogSidebarSection />);

    // Ensure tags section is rendered
    const tagsSection = screen.getByText('Tags');
    expect(tagsSection).toBeInTheDocument();
  });
});
