import React from "react";
import { render, screen } from "@testing-library/react";
import VideoSectionFive from "./video-section-five.js";

describe("VideoSectionFive", () => {
  test("renders without crashing", () => {
    render(<VideoSectionFive />);
    // screen.debug(); // Uncomment for debugging output
  });
});
