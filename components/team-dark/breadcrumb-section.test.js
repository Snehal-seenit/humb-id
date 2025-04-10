import React from "react";
import { render, screen } from "@testing-library/react";
import breadcrumb_section from "./breadcrumb-section";

describe("breadcrumb-section", () => {
  test("renders without crashing", () => {
    render(<breadcrumb_section />);
    // screen.debug();
  });
});
