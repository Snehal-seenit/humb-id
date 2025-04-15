import React from "react";
import { render, screen } from "@testing-library/react";
import ArtworkSection from "./artwork-section.js";

describe("ArtworkSection", () => {
  test("renders without crashing", () => {
    render(<ArtworkSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
