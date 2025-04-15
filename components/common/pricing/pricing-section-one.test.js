import React from "react";
import { render, screen } from "@testing-library/react";
import PricingSectionOne from "./pricing-section-one.js";

describe("PricingSectionOne", () => {
  test("renders without crashing", () => {
    render(<PricingSectionOne />);
    // screen.debug(); // Uncomment for debugging output
  });
});
