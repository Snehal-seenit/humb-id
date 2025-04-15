import React from "react";
import { render, screen } from "@testing-library/react";
import TradingSectionTwo from "./trading-section-two.js";

describe("TradingSectionTwo", () => {
  test("renders without crashing", () => {
    render(<TradingSectionTwo />);
    // screen.debug(); // Uncomment for debugging output
  });
});
