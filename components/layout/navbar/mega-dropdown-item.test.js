import React from "react";

import { render, screen } from "@testing-library/react";
import mega_dropdown_item from "./mega-dropdown-item";
describe("mega-dropdown-item", () => {
  test("renders without crashing", () => {
    render(<mega_dropdown_item />);
    // screen.debug();
  });
});
