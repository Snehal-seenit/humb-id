import React from "react";
import { render, screen } from "@testing-library/react";
import TextSliderOne from "./text-slider-one.js";

describe("TextSliderOne", () => {
  test("renders without crashing", () => {
    render(<TextSliderOne />);
    // screen.debug(); // Uncomment for debugging output
  });
});
