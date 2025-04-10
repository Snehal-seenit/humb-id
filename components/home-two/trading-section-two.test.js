import React from "react";

import { render, screen } from "@testing-library/react";
import trading_section_two from "./trading-section-two";
describe("trading-section-two", () => {
  test("renders without crashing", () => {
    render(<trading_section_two />);
    // screen.debug();
  });
});
