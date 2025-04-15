import { render } from "@testing-library/react";
import React from "react";
import BreadcrumbSection from "./breadcrumb-section";

describe("BreadcrumbSection", () => {
  test("renders without crashing", () => {
    render(<BreadcrumbSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
