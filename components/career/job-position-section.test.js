import React from "react";
import { render, screen } from "@testing-library/react";
import JobPositionSection from "./job-position-section.js";

describe("JobPositionSection", () => {
  test("renders without crashing", () => {
    render(<JobPositionSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
