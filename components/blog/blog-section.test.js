import React from "react";
import { render, screen } from "@testing-library/react";
import BlogSection from "./blog-section.js";

describe("BlogSection", () => {
  test("renders without crashing", () => {
    render(<BlogSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
