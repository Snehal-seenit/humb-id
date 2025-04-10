import React from "react";
import { render, screen } from "@testing-library/react";
import text_slider_one from "./text-slider-one";

describe("text-slider-one", () => {
  test("renders without crashing", () => {
    render(<text_slider_one />);
    // screen.debug();
  });
});
