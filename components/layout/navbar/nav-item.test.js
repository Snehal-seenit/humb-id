import React from "react";
import { render, screen } from "@testing-library/react";
import NavItem from "./nav-item.js";

describe("NavItem", () => {
  test("renders without crashing", () => {
    render(<NavItem />);
    // screen.debug(); // Uncomment for debugging output
  });
});
