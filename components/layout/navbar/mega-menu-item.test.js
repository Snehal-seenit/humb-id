import React from "react";
import { render, screen } from "@testing-library/react";
import mega_menu_item from "./mega-menu-item";

describe("mega-menu-item", () => {
  test("renders without crashing", () => {
    render(<mega_menu_item />);
    // screen.debug();
  });
});
