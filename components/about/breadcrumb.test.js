import React from "react";
import { render, screen } from "@testing-library/react";
import breadcrumb from "./breadcrumb";

describe("breadcrumb", () => {
  test("renders without crashing", () => {
    render(<breadcrumb />);
    // screen.debug();
  });
});
