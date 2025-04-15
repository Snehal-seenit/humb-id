import React from "react";
import { render, screen } from "@testing-library/react";
import CountdownSection from "./countdown-section.js";

describe("CountdownSection", () => {
  test("renders without crashing", () => {
    render(<CountdownSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
