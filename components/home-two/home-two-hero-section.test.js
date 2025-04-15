import React from "react";
import { render, screen } from "@testing-library/react";
import HomeTwoHeroSection from "./home-two-hero-section.js";

describe("HomeTwoHeroSection", () => {
  test("renders without crashing", () => {
    render(<HomeTwoHeroSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
