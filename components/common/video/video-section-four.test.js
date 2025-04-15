import React from "react";
import { render, screen } from "@testing-library/react";
import VideoSectionFour from "./video-section-four.js";

describe("VideoSectionFour", () => {
  test("renders without crashing", () => {
    render(<VideoSectionFour />);
    // screen.debug(); // Uncomment for debugging output
  });
});
