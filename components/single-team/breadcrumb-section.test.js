import { render } from "@testing-library/react";
import React from "react";
import BreadcrumbSection from "./breadcrumb-section"; // Update path if needed

describe("BreadcrumbSection", () => {
  test("renders without crashing", () => {
    render(<BreadcrumbSection />);
    // screen.debug(); // Uncomment to debug rendered output
  });
});
