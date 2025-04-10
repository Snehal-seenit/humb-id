import React from "react";
import { render, screen } from "@testing-library/react";
import second_level_dropdown_menu from "./second-level-dropdown-menu";

describe("second-level-dropdown-menu", () => {
  test("renders without crashing", () => {
    render(<second_level_dropdown_menu />);
    // screen.debug();
  });
});
