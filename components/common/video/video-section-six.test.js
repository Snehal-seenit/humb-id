import React from "react";
import { render, screen } from "@testing-library/react";
import VideoSectionSix from "./video-section-six.js";

describe("VideoSectionSix", () => {
  test("renders without crashing", () => {
    render(<VideoSectionSix />);
    // screen.debug(); // Uncomment for debugging output
  });
});
