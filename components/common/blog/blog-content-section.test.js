import React from "react";
import { render, screen } from "@testing-library/react";
import blog_content_section from "./blog-content-section";

describe("blog-content-section", () => {
  test("renders without crashing", () => {
    render(<blog_content_section />);
    // screen.debug();
  });
});
