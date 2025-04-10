import React from "react";
import { render, screen } from "@testing-library/react";
import cta_section from "./cta-section";

describe("cta-section", () => {
  test("renders without crashing", () => {
    render(<cta_section />);
    // screen.debug();
  });
});
