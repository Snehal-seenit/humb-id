import React from "react";
import { render, screen } from "@testing-library/react";
import feature_section_two from "./feature-section-two";

describe("feature-section-two", () => {
  test("renders without crashing", () => {
    render(<feature_section_two />);
    // screen.debug();
  });
});
