import React from "react";

import { render, screen } from "@testing-library/react";
import features_section from "./features-section";
describe("features-section", () => {
  test("renders without crashing", () => {
    render(<features_section />);
    // screen.debug();
  });
});
