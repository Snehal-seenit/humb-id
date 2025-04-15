import React from "react";
import { render, screen } from "@testing-library/react";
import VideoSectionTwo from "./video-section-two.js";

describe("VideoSectionTwo", () => {
  test("renders without crashing", () => {
    render(<VideoSectionTwo />);
    // screen.debug(); // Uncomment for debugging output
  });
});
