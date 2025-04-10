import React from "react";
import { render, screen } from "@testing-library/react";
import innser_section from "./innser-section";

describe("innser-section", () => {
  test("renders without crashing", () => {
    render(<innser_section />);
    // screen.debug();
  });
});
