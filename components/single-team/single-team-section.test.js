import React from "react";
import { render, screen } from "@testing-library/react";
import SingleTeamSection from "./single-team-section.js";

describe("SingleTeamSection", () => {
  test("renders without crashing", () => {
    render(<SingleTeamSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
