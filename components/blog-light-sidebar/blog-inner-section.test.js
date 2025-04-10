import React from "react";

import { render, screen } from "@testing-library/react";
import blog_inner_section from "./blog-inner-section";
describe("blog-inner-section", () => {
  test("renders without crashing", () => {
    render(<blog_inner_section />);
    // screen.debug();
  });
});
