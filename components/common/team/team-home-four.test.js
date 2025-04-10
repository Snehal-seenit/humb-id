import React from "react";

import { render, screen } from "@testing-library/react";
import team_home_four from "./team-home-four";
describe("team-home-four", () => {
  test("renders without crashing", () => {
    render(<team_home_four />);
    // screen.debug();
  });
});
