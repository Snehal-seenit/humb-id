import React from "react";
import { render, screen } from "@testing-library/react";
import FilterGallaryOne from "./filter-gallary-one.js";

describe("FilterGallaryOne", () => {
  test("renders without crashing", () => {
    render(<FilterGallaryOne />);
    // screen.debug(); // Uncomment for debugging output
  });
});
