import React from "react";
import { render, screen } from "@testing-library/react";
import TokenizationSingleBlogsDetails from "./tokenization-single-blogs-details.js";

describe("TokenizationSingleBlogsDetails", () => {
  test("renders without crashing", () => {
    render(<TokenizationSingleBlogsDetails />);
    // screen.debug(); // Uncomment for debugging output
  });
});
