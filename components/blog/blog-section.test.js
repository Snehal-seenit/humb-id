import React from "react";
import { render, screen } from "@testing-library/react";
import blog_section from "./blog-section";

describe("blog-section", () => {
  test("renders without crashing", () => {
    render(<blog_section />);
    // screen.debug();
  });
});
