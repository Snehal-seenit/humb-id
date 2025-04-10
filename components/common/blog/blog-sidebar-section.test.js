import React from "react";
import { render, screen } from "@testing-library/react";
import blog_sidebar_section from "./blog-sidebar-section";

describe("blog-sidebar-section", () => {
  test("renders without crashing", () => {
    render(<blog_sidebar_section />);
    // screen.debug();
  });
});
