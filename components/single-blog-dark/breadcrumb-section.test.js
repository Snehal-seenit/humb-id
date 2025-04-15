import React from "react";
import { render, screen } from "@testing-library/react";
import BreadcrumbSection from "./breadcrumb-section.js";

describe("BreadcrumbSection", () => {
  test("renders without crashing", () => {
    render(<BreadcrumbSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
