import React from "react";
import { render, screen } from "@testing-library/react";
import single_card_slider_two from "./single-card-slider-two";

describe("single-card-slider-two", () => {
  test("renders without crashing", () => {
    render(<single_card_slider_two />);
    // screen.debug();
  });
});
