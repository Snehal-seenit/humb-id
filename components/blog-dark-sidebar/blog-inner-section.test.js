import React from "react";
import { render, screen } from "@testing-library/react";
import BlogInnerSection from "./blog-inner-section.js";

describe("BlogInnerSection", () => {
  test("renders without crashing", () => {
    render(<BlogInnerSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
