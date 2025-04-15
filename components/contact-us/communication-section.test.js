import React from "react";
import { render, screen } from "@testing-library/react";
import CommunicationSection from "./communication-section.js";

describe("CommunicationSection", () => {
  test("renders without crashing", () => {
    render(<CommunicationSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
