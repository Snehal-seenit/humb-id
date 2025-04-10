import React from "react";

import { render, screen } from "@testing-library/react";
import pricing_section_two from "./pricing-section-two";
describe("pricing-section-two", () => {
  test("renders without crashing", () => {
    render(<pricing_section_two />);
    // screen.debug();
  });
});
