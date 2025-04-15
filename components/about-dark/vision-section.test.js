import React from "react";
import { render, screen } from "@testing-library/react";
import VisionSection from "./vision-section.js";

describe("VisionSection", () => {
  test("renders without crashing", () => {
    render(<VisionSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
