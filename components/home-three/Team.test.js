import React from "react";
import { render, screen } from "@testing-library/react";
import Team from "./Team.js";

describe("Team", () => {
  test("renders without crashing", () => {
    render(<Team />);
    // screen.debug(); // Uncomment for debugging output
  });
});
