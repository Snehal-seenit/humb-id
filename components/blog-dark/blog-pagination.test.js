import React from "react";
import { render, screen } from "@testing-library/react";
import blog_pagination from "./blog-pagination";

describe("blog-pagination", () => {
  test("renders without crashing", () => {
    render(<blog_pagination />);
    // screen.debug();
  });
});
