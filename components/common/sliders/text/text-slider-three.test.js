import React from "react";

import { render, screen } from "@testing-library/react";
import text_slider_three from "./text-slider-three";
describe("text-slider-three", () => {
  test("renders without crashing", () => {
    render(<text_slider_three />);
    // screen.debug();
  });
});
