import React from "react";
import { render, screen } from "@testing-library/react";
import FeaturesSection from "./features-section.js";

describe("FeaturesSection", () => {
  test("renders without crashing", () => {
    render(<FeaturesSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
