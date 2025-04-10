import React from "react";

import { render, screen } from "@testing-library/react";
import menu_data from "./menu-data";
describe("menu-data", () => {
  test("renders without crashing", () => {
    render(<menu_data />);
    // screen.debug();
  });
});
