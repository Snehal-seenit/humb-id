import React from "react";

import { render, screen } from "@testing-library/react";
import testimonial_slider_one from "./testimonial-slider-one";
describe("testimonial-slider-one", () => {
  test("renders without crashing", () => {
    render(<testimonial_slider_one />);
    // screen.debug();
  });
});
