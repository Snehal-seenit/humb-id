// mega-menu.integration.test.js
import { render, screen } from '@testing-library/react';
import React from 'react';
import MegaMenu from './components/layout/navbar/mega-menu.js';



const mockMenuItems = [
  {
    title: "About Style",
    submenu: [
      { title: "About Dark", path: "about-dark" },
      { title: "About Light 01", path: "about-us" },
    ],
  },
  {
    title: "Blog Style",
    submenu: [
      { title: "Blog Dark", path: "blog-dark" },
      { title: "Blog Dark Sidebar", path: "blog-dark-sidebar" },
    ],
  },
  {
    title: "Contact Style",
    submenu: [
      { title: "Contact Dark", path: "contact-dark" },
      { title: "Contact Light 01", path: "contact" },
    ],
  },
];

describe('Integration: MegaMenu', () => {
  test('renders and displays all section titles and submenu items', () => {
    render(<MegaMenu menuItems={mockMenuItems} />);

    // Section headers
    expect(screen.getByText('About Style')).toBeInTheDocument();
    expect(screen.getByText('Blog Style')).toBeInTheDocument();
    expect(screen.getByText('Contact Style')).toBeInTheDocument();

    // Submenu links
    expect(screen.getByText('About Dark')).toBeInTheDocument();
    expect(screen.getByText('About Light 01')).toBeInTheDocument();
    expect(screen.getByText('Blog Dark')).toBeInTheDocument();
    expect(screen.getByText('Blog Dark Sidebar')).toBeInTheDocument();
    expect(screen.getByText('Contact Dark')).toBeInTheDocument();
    expect(screen.getByText('Contact Light 01')).toBeInTheDocument();
  });
});
