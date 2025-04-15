import React from "react";
import { render, screen } from "@testing-library/react";
import BlogDarkInnerSection from "./blog-dark-inner-section.js";

describe("BlogDarkInnerSection", () => {
  test("renders without crashing", () => {
    render(<BlogDarkInnerSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
