import React from "react";
import { render, screen } from "@testing-library/react";
import SingleBlogSidebarSection from "./single-blog-sidebar-section.js";

describe("SingleBlogSidebarSection", () => {
  test("renders without crashing", () => {
    render(<SingleBlogSidebarSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
