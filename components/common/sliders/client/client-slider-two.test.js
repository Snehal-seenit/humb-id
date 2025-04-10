import React from "react";
import { render, screen } from "@testing-library/react";
import client_slider_two from "./client-slider-two";

describe("client-slider-two", () => {
  test("renders without crashing", () => {
    render(<client_slider_two />);
    // screen.debug();
  });
});
