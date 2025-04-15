import React from "react";
import { render, screen } from "@testing-library/react";
import TextSliderThree from "./text-slider-three.js";

describe("TextSliderThree", () => {
  test("renders without crashing", () => {
    render(<TextSliderThree />);
    // screen.debug(); // Uncomment for debugging output
  });
});
