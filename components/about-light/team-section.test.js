import React from "react";
import { render, screen } from "@testing-library/react";
import TeamSection from "./team-section.js";

describe("TeamSection", () => {
  test("renders without crashing", () => {
    render(<TeamSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
