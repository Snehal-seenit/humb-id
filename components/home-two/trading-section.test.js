import React from "react";
import { render, screen } from "@testing-library/react";
import TradingSection from "./trading-section.js";

describe("TradingSection", () => {
  test("renders without crashing", () => {
    render(<TradingSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
