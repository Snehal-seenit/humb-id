import React from "react";
import { render, screen } from "@testing-library/react";
import ChartSection from "./chart-section.js";

describe("ChartSection", () => {
  test("renders without crashing", () => {
    render(<ChartSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
