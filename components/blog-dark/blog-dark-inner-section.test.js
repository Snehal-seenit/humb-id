import React from "react";
import { render, screen } from "@testing-library/react";
import blog_dark_inner_section from "./blog-dark-inner-section";

describe("blog-dark-inner-section", () => {
  test("renders without crashing", () => {
    render(<blog_dark_inner_section />);
    // screen.debug();
  });
});
