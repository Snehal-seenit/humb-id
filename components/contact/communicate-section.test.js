import React from "react";
import { render, screen } from "@testing-library/react";
import CommunicateSection from "./communicate-section.js";

describe("CommunicateSection", () => {
  test("renders without crashing", () => {
    render(<CommunicateSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
