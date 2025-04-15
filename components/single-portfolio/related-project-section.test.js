import React from "react";
import { render, screen } from "@testing-library/react";
import RelatedProjectSection from "./related-project-section.js";

describe("RelatedProjectSection", () => {
  test("renders without crashing", () => {
    render(<RelatedProjectSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
