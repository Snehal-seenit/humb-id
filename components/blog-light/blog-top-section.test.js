import React from "react";
import { render, screen } from "@testing-library/react";
import blog_top_section from "./blog-top-section";

describe("blog-top-section", () => {
  test("renders without crashing", () => {
    render(<blog_top_section />);
    // screen.debug();
  });
});
