import React from "react";
import { render, screen } from "@testing-library/react";
import breadcrumbs_section from "./breadcrumbs-section";

describe("breadcrumbs-section", () => {
  test("renders without crashing", () => {
    render(<breadcrumbs_section />);
    // screen.debug();
  });
});
