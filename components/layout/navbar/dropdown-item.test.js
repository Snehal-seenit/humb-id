import React from "react";
import { render, screen } from "@testing-library/react";
import dropdown_item from "./dropdown-item";

describe("dropdown-item", () => {
  test("renders without crashing", () => {
    render(<dropdown_item />);
    // screen.debug();
  });
});
