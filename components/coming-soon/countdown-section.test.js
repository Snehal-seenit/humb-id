import React from "react";

import { render, screen } from "@testing-library/react";
import countdown_section from "./countdown-section";
describe("countdown-section", () => {
  test("renders without crashing", () => {
    render(<countdown_section />);
    // screen.debug();
  });
});
