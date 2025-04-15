import React from "react";
import { render, screen } from "@testing-library/react";
import RoadmapSection from "./roadmap-section.js";

describe("RoadmapSection", () => {
  test("renders without crashing", () => {
    render(<RoadmapSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
