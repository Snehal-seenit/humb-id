import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import React from "react";
import FooterHomeThree from "./footer-home-three";

describe("FooterHomeThree Component", () => {
  it("renders footer logo", () => {
    const { container } = render(<FooterHomeThree />);
    const logoImg = container.querySelector('img.light-version-logo');
    expect(logoImg).toBeInTheDocument();
  });

  it("displays footer description text", () => {
    render(<FooterHomeThree />);
    expect(screen.getByText(/Discover NFTs by category/i)).toBeInTheDocument();
  });

  it("displays all social media icons", () => {
    const { container } = render(<FooterHomeThree />);
    const socialIcons = container.querySelectorAll('.fugu--social-icon img');
    expect(socialIcons.length).toBeGreaterThanOrEqual(4); // You expect 4 icons
  });
});
