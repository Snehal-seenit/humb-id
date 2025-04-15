import React from "react";
import { render, screen } from "@testing-library/react";
import Trading from "./trading.js";

describe("Trading", () => {
  test("renders without crashing", () => {
    render(<Trading />);
    // screen.debug(); // Uncomment for debugging output
  });
});
