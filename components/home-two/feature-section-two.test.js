import React from "react";
import { render, screen } from "@testing-library/react";
import FeatureSectionTwo from "./feature-section-two.js";

describe("FeatureSectionTwo", () => {
  test("renders without crashing", () => {
    render(<FeatureSectionTwo />);
    // screen.debug(); // Uncomment for debugging output
  });
});
