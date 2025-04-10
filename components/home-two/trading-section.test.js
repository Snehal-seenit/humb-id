import React from "react";

import { render, screen } from "@testing-library/react";
import trading_section from "./trading-section";
describe("trading-section", () => {
  test("renders without crashing", () => {
    render(<trading_section />);
    // screen.debug();
  });
});
