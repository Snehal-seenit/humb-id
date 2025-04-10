import React from "react";
import { render, screen } from "@testing-library/react";
import pricing_section_one from "./pricing-section-one";

describe("pricing-section-one", () => {
  test("renders without crashing", () => {
    render(<pricing_section_one />);
    // screen.debug();
  });
});
