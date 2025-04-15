import React from "react";
import { render, screen } from "@testing-library/react";
import BlogSidebarSection from "./blog-sidebar-section.js";

describe("BlogSidebarSection", () => {
  test("renders without crashing", () => {
    render(<BlogSidebarSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
