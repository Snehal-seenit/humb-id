import React from "react";

import { render, screen } from "@testing-library/react";
import inner_section from "./inner-section";
describe("inner-section", () => {
  test("renders without crashing", () => {
    render(<inner_section />);
    // screen.debug();
  });
});
