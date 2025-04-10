import React from "react";

import { render, screen } from "@testing-library/react";
import feature_one_section from "./feature-one-section";
describe("feature-one-section", () => {
  test("renders without crashing", () => {
    render(<feature_one_section />);
    // screen.debug();
  });
});
