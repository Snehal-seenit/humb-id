import React from "react";
import { render, screen } from "@testing-library/react";
import TestimonialSliderOne from "./testimonial-slider-one.js";

describe("TestimonialSliderOne", () => {
  test("renders without crashing", () => {
    render(<TestimonialSliderOne />);
    // screen.debug(); // Uncomment for debugging output
  });
});
