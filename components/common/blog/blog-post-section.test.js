import React from "react";
import { render, screen } from "@testing-library/react";
import BlogPostSection from "./blog-post-section.js";

describe("BlogPostSection", () => {
  test("renders without crashing", () => {
    render(<BlogPostSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
