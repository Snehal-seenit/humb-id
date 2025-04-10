import React from "react";
import { render, screen } from "@testing-library/react";
import feature_section from "./feature-section";

describe("feature-section", () => {
  test("renders without crashing", () => {
    render(<feature_section />);
    // screen.debug();
  });
});
