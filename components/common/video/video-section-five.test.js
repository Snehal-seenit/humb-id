import React from "react";

import { render, screen } from "@testing-library/react";
import video_section_five from "./video-section-five";
describe("video-section-five", () => {
  test("renders without crashing", () => {
    render(<video_section_five />);
    // screen.debug();
  });
});
