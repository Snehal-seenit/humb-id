import { render } from "@testing-library/react";
import React from "react";
import FilterGallaryFour from "./filter-gallary-four.js";

describe("FilterGallaryFour", () => {
  test("renders without crashing", () => {
    render(<FilterGallaryFour />);
    // screen.debug(); // Uncomment for debugging output
  });
});
