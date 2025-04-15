import React from "react";
import { render, screen } from "@testing-library/react";
import ClientSliderTwo from "./client-slider-two.js";

describe("ClientSliderTwo", () => {
  test("renders without crashing", () => {
    render(<ClientSliderTwo />);
    // screen.debug(); // Uncomment for debugging output
  });
});
