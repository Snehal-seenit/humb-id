import React from "react";
import { render, screen } from "@testing-library/react";
import nav_item from "./nav-item";

describe("nav-item", () => {
  test("renders without crashing", () => {
    render(<nav_item />);
    // screen.debug();
  });
});
