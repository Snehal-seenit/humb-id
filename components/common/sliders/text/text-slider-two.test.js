import React from "react";

import { render, screen } from "@testing-library/react";
import text_slider_two from "./text-slider-two";
describe("text-slider-two", () => {
  test("renders without crashing", () => {
    render(<text_slider_two />);
    // screen.debug();
  });
});
