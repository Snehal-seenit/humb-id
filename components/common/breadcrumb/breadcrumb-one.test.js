import React from "react";
import { render, screen } from "@testing-library/react";
import BreadcrumbOne from "./breadcrumb-one.js";

describe("BreadcrumbOne", () => {
  test("renders without crashing", () => {
    render(<BreadcrumbOne />);
    // screen.debug(); // Uncomment for debugging output
  });
});
