import React from "react";
import { render, screen } from "@testing-library/react";
import BlogContentSection from "./blog-content-section.js";

describe("BlogContentSection", () => {
  test("renders without crashing", () => {
    render(<BlogContentSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
