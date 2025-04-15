import React from "react";
import { render, screen } from "@testing-library/react";
import AboutSection from "./about-section.js";

describe("AboutSection", () => {
  test("renders without crashing", () => {
    render(<AboutSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
