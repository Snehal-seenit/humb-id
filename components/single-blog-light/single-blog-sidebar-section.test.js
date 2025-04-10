import React from "react";
import { render, screen } from "@testing-library/react";
import single_blog_sidebar_section from "./single-blog-sidebar-section";

describe("single-blog-sidebar-section", () => {
  test("renders without crashing", () => {
    render(<single_blog_sidebar_section />);
    // screen.debug();
  });
});
