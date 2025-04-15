import React from "react";
import { render, screen } from "@testing-library/react";
import BlogPagination from "./blog-pagination.js";

describe("BlogPagination", () => {
  test("renders without crashing", () => {
    render(<BlogPagination />);
    // screen.debug(); // Uncomment for debugging output
  });
});
