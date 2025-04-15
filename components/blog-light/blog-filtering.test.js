import { render, screen } from "@testing-library/react";
import React from "react";
import BlogFiltering from "./blog-filtering.js";

describe("BlogFiltering", () => {
  test("renders without crashing", () => {
    render(<BlogFiltering />);
    // screen.debug(); // Uncomment for debugging output
    expect(screen.getByText(/Latest articles/i)).toBeInTheDocument();
  });
});
