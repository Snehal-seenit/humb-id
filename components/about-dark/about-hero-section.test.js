import React from "react";
import { render, screen } from "@testing-library/react";
import AboutHeroSection from "./about-hero-section.js";

describe("AboutHeroSection", () => {
  test("renders without crashing", () => {
    render(<AboutHeroSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
