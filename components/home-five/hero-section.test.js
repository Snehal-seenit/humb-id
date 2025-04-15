import React from "react";
import { render, screen } from "@testing-library/react";
import HeroSection from "./hero-section.js";

describe("HeroSection", () => {
  test("renders without crashing", () => {
    render(<HeroSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
