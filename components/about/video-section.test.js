import React from "react";
import { render, screen } from "@testing-library/react";
import VideoSection from "./video-section.js";

describe("VideoSection", () => {
  test("renders without crashing", () => {
    render(<VideoSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
