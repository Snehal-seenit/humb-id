import React from "react";
import { render, screen } from "@testing-library/react";
import FeesBreadcrumb from "./fees-breadcrumb.js";

describe("FeesBreadcrumb", () => {
  test("renders without crashing", () => {
    render(<FeesBreadcrumb />);
    // screen.debug(); // Uncomment for debugging output
  });
});
