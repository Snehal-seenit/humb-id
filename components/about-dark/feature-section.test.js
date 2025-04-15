import React from "react";
import { render, screen } from "@testing-library/react";
import FeatureSection from "./feature-section.js";

describe("FeatureSection", () => {
  test("renders without crashing", () => {
    render(<FeatureSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
