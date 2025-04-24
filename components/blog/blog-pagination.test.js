import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import BlogPagination from './blog-pagination';

// ✅ Mock next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('BlogPagination', () => {
  beforeEach(() => {
    useRouter.mockReturnValue({ push: jest.fn() });
  });

  test('renders pagination links and navigation arrows', () => {
    render(<BlogPagination />);

    // ✅ Page numbers
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();

    // ✅ Active page
    expect(screen.getByText('1')).toHaveClass('active');

    // ✅ Find images by empty alt ("" is valid but not accessible by role)
    const images = screen.getAllByAltText('');
    expect(images.length).toBeGreaterThanOrEqual(2); // left and right arrows
  });
});
