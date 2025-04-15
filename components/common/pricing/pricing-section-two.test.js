import React from "react";
import { render, screen } from "@testing-library/react";
import PricingSectionTwo from "./pricing-section-two.js";

describe("PricingSectionTwo", () => {
  test("renders without crashing", () => {
    render(<PricingSectionTwo />);
    // screen.debug(); // Uncomment for debugging output
  });
});
