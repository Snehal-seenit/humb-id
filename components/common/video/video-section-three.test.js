import React from "react";
import { render, screen } from "@testing-library/react";
import VideoSectionThree from "./video-section-three.js";

describe("VideoSectionThree", () => {
  test("renders without crashing", () => {
    render(<VideoSectionThree />);
    // screen.debug(); // Uncomment for debugging output
  });
});
