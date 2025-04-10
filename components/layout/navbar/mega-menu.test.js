import React from "react";

import { render, screen } from "@testing-library/react";
import mega_menu from "./mega-menu";
describe("mega-menu", () => {
  test("renders without crashing", () => {
    render(<mega_menu />);
    // screen.debug();
  });
});
