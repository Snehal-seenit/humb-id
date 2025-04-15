import React from "react";
import { render, screen } from "@testing-library/react";
import BreadcrumbsSection from "./breadcrumbs-section.js";

describe("BreadcrumbsSection", () => {
  test("renders without crashing", () => {
    render(<BreadcrumbsSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
