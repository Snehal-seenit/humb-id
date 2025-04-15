import React from "react";
import { render, screen } from "@testing-library/react";
import CardSliderTwo from "./card-slider-two.js";

describe("CardSliderTwo", () => {
  test("renders without crashing", () => {
    render(<CardSliderTwo />);
    // screen.debug(); // Uncomment for debugging output
  });
});
