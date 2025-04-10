import React from "react";
import { render, screen } from "@testing-library/react";
import newsletter_section from "./newsletter-section";

describe("newsletter-section", () => {
  test("renders without crashing", () => {
    render(<newsletter_section />);
    // screen.debug();
  });
});
