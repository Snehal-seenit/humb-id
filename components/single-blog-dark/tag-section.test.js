import React from "react";
import { render, screen } from "@testing-library/react";
import TagSection from "./tag-section.js";

describe("TagSection", () => {
  test("renders without crashing", () => {
    render(<TagSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
