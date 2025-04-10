import React from "react";

import { render, screen } from "@testing-library/react";
import video_section_one from "./video-section-one";
describe("video-section-one", () => {
  test("renders without crashing", () => {
    render(<video_section_one />);
    // screen.debug();
  });
});
