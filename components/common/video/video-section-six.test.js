import React from "react";

import { render, screen } from "@testing-library/react";
import video_section_six from "./video-section-six";
describe("video-section-six", () => {
  test("renders without crashing", () => {
    render(<video_section_six />);
    // screen.debug();
  });
});
