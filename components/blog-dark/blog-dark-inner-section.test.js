import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import BlogDarkInnerSection from '../../components/blog-dark/blog-dark-inner-section';

// Mocks for dynamic and child components
jest.mock('../../components/blog-dark/blog-filtering', () => ({
  __esModule: true,
  default: () => <div>Mocked Blog Filtering</div>,
}));

jest.mock('../../components/blog-light/blog-top-section', () => ({
  __esModule: true,
  default: () => <div>Mocked Blog Top Section</div>,
}));

jest.mock('../../components/blog-light/breadcrumbs-section', () => ({
  __esModule: true,
  default: () => <div>Mocked Breadcrumbs Section</div>,
}));

jest.mock('../../components/blog-dark/blog-pagination', () => ({
  __esModule: true,
  default: () => <div>Mocked Blog Pagination</div>,
}));

describe('BlogDarkInnerSection', () => {
  it('renders all sections correctly', async () => {
    render(<BlogDarkInnerSection />);

    // Wait for dynamic component to appear
    await waitFor(() => {
      expect(screen.getByText('Mocked Blog Filtering')).toBeInTheDocument();
    });

    // Check static children
    expect(screen.getByText('Mocked Blog Top Section')).toBeInTheDocument();
    expect(screen.getByText('Mocked Breadcrumbs Section')).toBeInTheDocument();
    expect(screen.getByText('Mocked Blog Pagination')).toBeInTheDocument();
  });
});
