import React from "react";
import { render, screen } from "@testing-library/react";
import MissionVision from "./mission-vision.js";

describe("MissionVision", () => {
  test("renders without crashing", () => {
    render(<MissionVision />);
    // screen.debug(); // Uncomment for debugging output
  });
});
