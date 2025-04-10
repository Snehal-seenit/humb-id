import React from "react";

import { render, screen } from "@testing-library/react";
import video_section_two from "./video-section-two";
describe("video-section-two", () => {
  test("renders without crashing", () => {
    render(<video_section_two />);
    // screen.debug();
  });
});
