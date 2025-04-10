import React from "react";
import { render, screen } from "@testing-library/react";
import chart_section from "./chart-section";

describe("chart-section", () => {
  test("renders without crashing", () => {
    render(<chart_section />);
    // screen.debug();
  });
});
