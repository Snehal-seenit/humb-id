import React from "react";
import { render, screen } from "@testing-library/react";
import HeroThumbSection from "./hero-thumb-section.js";

describe("HeroThumbSection", () => {
  test("renders without crashing", () => {
    render(<HeroThumbSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
