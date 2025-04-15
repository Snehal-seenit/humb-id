import React from "react";
import { render, screen } from "@testing-library/react";
import Profit from "./profit.js";

describe("Profit", () => {
  test("renders without crashing", () => {
    render(<Profit />);
    // screen.debug(); // Uncomment for debugging output
  });
});
