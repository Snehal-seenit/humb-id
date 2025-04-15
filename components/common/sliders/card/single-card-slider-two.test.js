import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import SingleCardSliderTwo from "./single-card-slider-two.js";

describe("SingleCardSliderTwo", () => {
  test("renders without crashing", () => {
    render(
      <BrowserRouter>
        <SingleCardSliderTwo />
      </BrowserRouter>
    );
    // screen.debug(); // Uncomment to inspect output
  });
});
