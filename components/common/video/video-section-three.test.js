import React from "react";

import { render, screen } from "@testing-library/react";
import video_section_three from "./video-section-three";
describe("video-section-three", () => {
  test("renders without crashing", () => {
    render(<video_section_three />);
    // screen.debug();
  });
});
