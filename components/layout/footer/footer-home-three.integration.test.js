import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import React from "react";
import FooterHomeThree from "./footer-home-three";

describe("FooterHomeThree Integration Test", () => {
  it("renders logo, description, social icons, and footer links together", () => {
    const { container } = render(<FooterHomeThree />);

    // Logo check
    const logoImg = container.querySelector('img.light-version-logo');
    expect(logoImg).toBeInTheDocument();

    // Description text check
    expect(screen.getByText(/Discover NFTs by category/i)).toBeInTheDocument();

    // Social icons check
    const socialIcons = container.querySelectorAll('.fugu--social-icon img');
    expect(socialIcons.length).toBeGreaterThanOrEqual(4);

    // Footer menu links
    expect(screen.getByText(/Create A Store/i)).toBeInTheDocument();
    expect(screen.getByText(/Help center/i)).toBeInTheDocument();
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
  });

  it("contains all footer columns and navigation items", () => {
    const { container } = render(<FooterHomeThree />);
    
    const allLinks = container.querySelectorAll('footer a');
    expect(allLinks.length).toBeGreaterThanOrEqual(15); // Rough check for all footer <a> tags
  });
});
