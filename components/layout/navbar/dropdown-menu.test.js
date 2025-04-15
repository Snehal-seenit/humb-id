import React from "react";
import { render, screen } from "@testing-library/react";
import DropdownMenu from "./dropdown-menu.js";

describe("DropdownMenu", () => {
  test("renders without crashing", () => {
    render(<DropdownMenu />);
    // screen.debug(); // Uncomment for debugging output
  });
});
