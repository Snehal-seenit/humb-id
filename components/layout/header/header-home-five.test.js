import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderHomeFive from "./header-home-five.js";

describe("HeaderHomeFive", () => {
  test("renders without crashing", () => {
    render(<HeaderHomeFive />);
    // screen.debug(); // Uncomment for debugging output
  });
});
