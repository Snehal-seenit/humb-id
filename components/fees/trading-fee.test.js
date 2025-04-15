import React from "react";
import { render, screen } from "@testing-library/react";
import TradingFee from "./trading-fee.js";

describe("TradingFee", () => {
  test("renders without crashing", () => {
    render(<TradingFee />);
    // screen.debug(); // Uncomment for debugging output
  });
});
