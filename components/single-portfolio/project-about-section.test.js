import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectAboutSection from "./project-about-section.js";

describe("ProjectAboutSection", () => {
  test("renders without crashing", () => {
    render(<ProjectAboutSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
