import React from "react";
import { render, screen } from "@testing-library/react";
import VideoSectionOne from "./video-section-one.js";

describe("VideoSectionOne", () => {
  test("renders without crashing", () => {
    render(<VideoSectionOne />);
    // screen.debug(); // Uncomment for debugging output
  });
});
