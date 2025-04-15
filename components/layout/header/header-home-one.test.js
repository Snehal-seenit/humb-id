import { render, screen } from "@testing-library/react";
import React from "react";
import HeaderHomeOne from "./header-home-one.js";

describe("HeaderHomeOne", () => {
  test("renders without crashing", () => {
    render(<HeaderHomeOne />);
    // Use getAllByRole to account for multiple navigation elements
    const navElements = screen.getAllByRole('navigation');
    expect(navElements.length).toBeGreaterThan(0); // Ensure there's at least one navigation element
  });
});
