import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Breadcrumb from './breadcrumb';

describe('Breadcrumb Component', () => {
  test('renders breadcrumb links correctly', () => {
    render(<Breadcrumb />);

    // Get the correct "About Us" element from breadcrumb <li>
    const allAboutUs = screen.getAllByText(/about us/i);
    const breadcrumbItem = allAboutUs.find(
      (el) => el.closest('li')?.classList.contains('breadcrumb-item')
    );
    expect(breadcrumbItem).toBeInTheDocument();
    expect(breadcrumbItem).toHaveClass('breadcrumb-item active');

    // Check the "Home" link
    const homeLink = screen.getByText(/home/i);
    expect(homeLink).toBeInTheDocument();
  });

  test('renders shape images correctly', () => {
    render(<Breadcrumb />);

    const shape8 = document.querySelector('.fugu-shape8 img');
    expect(shape8).toBeInTheDocument();

    const shape9 = document.querySelector('.fugu-shape9 img');
    expect(shape9).toBeInTheDocument();
  });
});
