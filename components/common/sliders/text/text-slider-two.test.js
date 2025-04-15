import React from "react";
import { render, screen } from "@testing-library/react";
import TextSliderTwo from "./text-slider-two.js";

describe("TextSliderTwo", () => {
  test("renders without crashing", () => {
    render(<TextSliderTwo />);
    // screen.debug(); // Uncomment for debugging output
  });
});
