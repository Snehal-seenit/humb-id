import React from "react";
import { render, screen } from "@testing-library/react";
import client_slider_one from "./client-slider-one";

describe("client-slider-one", () => {
  test("renders without crashing", () => {
    render(<client_slider_one />);
    // screen.debug();
  });
});
