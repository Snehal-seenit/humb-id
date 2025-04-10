import React from "react";
import { render, screen } from "@testing-library/react";
import dropdown_menu from "./dropdown-menu";

describe("dropdown-menu", () => {
  test("renders without crashing", () => {
    render(<dropdown_menu />);
    // screen.debug();
  });
});
