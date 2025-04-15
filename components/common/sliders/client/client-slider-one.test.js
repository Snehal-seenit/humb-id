import React from "react";
import { render, screen } from "@testing-library/react";
import ClientSliderOne from "./client-slider-one.js";

describe("ClientSliderOne", () => {
  test("renders without crashing", () => {
    render(<ClientSliderOne />);
    // screen.debug(); // Uncomment for debugging output
  });
});
