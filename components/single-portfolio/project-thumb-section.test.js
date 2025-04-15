import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectThumbSection from "./project-thumb-section.js";

describe("ProjectThumbSection", () => {
  test("renders without crashing", () => {
    render(<ProjectThumbSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
