import React from "react";
import { render, screen } from "@testing-library/react";
import TeamHomeFour from "./team-home-four.js";

describe("TeamHomeFour", () => {
  test("renders without crashing", () => {
    render(<TeamHomeFour />);
    // screen.debug(); // Uncomment for debugging output
  });
});
