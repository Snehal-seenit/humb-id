import React from "react";
import { render, screen } from "@testing-library/react";
import ArtWorkSection from "./art-work-section.js";

describe("ArtWorkSection", () => {
  test("renders without crashing", () => {
    render(<ArtWorkSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
