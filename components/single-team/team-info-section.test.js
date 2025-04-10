import React from "react";
import { render, screen } from "@testing-library/react";
import team_info_section from "./team-info-section";

describe("team-info-section", () => {
  test("renders without crashing", () => {
    render(<team_info_section />);
    // screen.debug();
  });
});
