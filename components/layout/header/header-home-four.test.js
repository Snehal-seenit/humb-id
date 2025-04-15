import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderHomeFour from "./header-home-four.js";

describe("HeaderHomeFour", () => {
  test("renders without crashing", () => {
    render(<HeaderHomeFour />);
    // screen.debug(); // Uncomment for debugging output
  });
});
