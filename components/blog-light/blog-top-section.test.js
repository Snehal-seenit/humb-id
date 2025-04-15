import React from "react";
import { render, screen } from "@testing-library/react";
import BlogTopSection from "./blog-top-section.js";

describe("BlogTopSection", () => {
  test("renders without crashing", () => {
    render(<BlogTopSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
