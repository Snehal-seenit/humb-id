import React from "react";

import { render, screen } from "@testing-library/react";
import team_section from "./team-section";
describe("team-section", () => {
  test("renders without crashing", () => {
    render(<team_section />);
    // screen.debug();
  });
});
