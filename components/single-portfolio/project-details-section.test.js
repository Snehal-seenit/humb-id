import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectDetailsSection from "./project-details-section.js";

describe("ProjectDetailsSection", () => {
  test("renders without crashing", () => {
    render(<ProjectDetailsSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
