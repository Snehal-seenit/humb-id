import React from "react";

import { render, screen } from "@testing-library/react";
import video_section from "./video-section";
describe("video-section", () => {
  test("renders without crashing", () => {
    render(<video_section />);
    // screen.debug();
  });
});
