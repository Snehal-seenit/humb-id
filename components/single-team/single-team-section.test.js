import React from "react";
import { render, screen } from "@testing-library/react";
import single_team_section from "./single-team-section";

describe("single-team-section", () => {
  test("renders without crashing", () => {
    render(<single_team_section />);
    // screen.debug();
  });
});
