import React from "react";
import { render, screen } from "@testing-library/react";
import CardSliderTwo from "./card-slider-two"; // ✅ Update this line

describe("CardSliderTwo", () => {
  test("renders without crashing", () => {
    render(<CardSliderTwo />); // ✅ Use correct casing
    // screen.debug();
  });
});
