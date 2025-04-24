import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import FeatureSection from "./feature-section";

describe("FeatureSection", () => {
  test("renders without crashing", () => {
    render(<FeatureSection />);
  });

  test("renders section heading", () => {
    render(<FeatureSection />);
    expect(
      screen.getByText(/modern features that set apart from everyone else/i)
    ).toBeInTheDocument();
  });

  test("renders all feature titles", () => {
    render(<FeatureSection />);
    expect(screen.getByText(/safe and secure/i)).toBeInTheDocument();
    expect(screen.getByText(/complete transparency/i)).toBeInTheDocument();
    expect(screen.getByText(/creative team/i)).toBeInTheDocument();
  });

  test("renders all three feature icons", () => {
    render(<FeatureSection />);
    const images = document.querySelectorAll('.fugu-iconbox-icon4 img');
    expect(images.length).toBe(3);
  });
});
