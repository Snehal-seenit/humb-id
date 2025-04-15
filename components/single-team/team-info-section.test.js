import React from "react";
import { render, screen } from "@testing-library/react";
import TeamInfoSection from "./team-info-section.js";

describe("TeamInfoSection", () => {
  test("renders without crashing", () => {
    render(<TeamInfoSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
