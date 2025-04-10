import React from "react";
import { render, screen } from "@testing-library/react";
import testimonial_slider_two from "./testimonial-slider-two";

describe("testimonial-slider-two", () => {
  test("renders without crashing", () => {
    render(<testimonial_slider_two />);
    // screen.debug();
  });
});
