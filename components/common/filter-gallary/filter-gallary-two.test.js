import React from "react";
import { render, screen } from "@testing-library/react";
import FilterGallaryTwo from "./filter-gallary-two.js";

describe("FilterGallaryTwo", () => {
  test("renders without crashing", () => {
    render(<FilterGallaryTwo />);
    // screen.debug(); // Uncomment for debugging output
  });
});
