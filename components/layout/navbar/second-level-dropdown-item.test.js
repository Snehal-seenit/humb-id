import React from "react";

import { render, screen } from "@testing-library/react";
import second_level_dropdown_item from "./second-level-dropdown-item";
describe("second-level-dropdown-item", () => {
  test("renders without crashing", () => {
    render(<second_level_dropdown_item />);
    // screen.debug();
  });
});
