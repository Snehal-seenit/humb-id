import React from "react";
import { render, screen } from "@testing-library/react";
import TestimonialSliderTwo from "./testimonial-slider-two.js";

describe("TestimonialSliderTwo", () => {
  test("renders without crashing", () => {
    render(<TestimonialSliderTwo />);
    // screen.debug(); // Uncomment for debugging output
  });
});
