import React from "react";
import { render, screen } from "@testing-library/react";
import CardSliderOne from "./card-slider-one.js";

describe("CardSliderOne", () => {
  test("renders without crashing", () => {
    render(<CardSliderOne />);
    // screen.debug(); // Uncomment for debugging output
  });
});
