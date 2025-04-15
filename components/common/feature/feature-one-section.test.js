import React from "react";
import { render, screen } from "@testing-library/react";
import FeatureOneSection from "./feature-one-section.js";

describe("FeatureOneSection", () => {
  test("renders without crashing", () => {
    render(<FeatureOneSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
