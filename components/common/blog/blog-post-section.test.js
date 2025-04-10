import React from "react";
import { render, screen } from "@testing-library/react";
import blog_post_section from "./blog-post-section";

describe("blog-post-section", () => {
  test("renders without crashing", () => {
    render(<blog_post_section />);
    // screen.debug();
  });
});
