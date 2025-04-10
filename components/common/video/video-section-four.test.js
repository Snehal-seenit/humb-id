import React from "react";

import { render, screen } from "@testing-library/react";
import video_section_four from "./video-section-four";
describe("video-section-four", () => {
  test("renders without crashing", () => {
    render(<video_section_four />);
    // screen.debug();
  });
});
