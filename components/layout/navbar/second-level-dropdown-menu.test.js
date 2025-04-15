import React from "react";
import { render, screen } from "@testing-library/react";
import SecondLevelDropdownMenu from "./second-level-dropdown-menu.js";

describe("SecondLevelDropdownMenu", () => {
  test("renders without crashing", () => {
    render(<SecondLevelDropdownMenu />);
    // screen.debug(); // Uncomment for debugging output
  });
});
