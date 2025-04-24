import { render, screen } from "@testing-library/react";
import React from "react";
import SecondLevelDropdownItem from "./second-level-dropdown-item"; // Correct import (uppercase component name)

describe("Integration: SecondLevelDropdownItem", () => {
  test("renders with required props", () => {
    render(
      <SecondLevelDropdownItem navItemText="Test Item" path="/example" />
    );

    // Ensure the link renders correctly
    expect(screen.getByText("Test Item")).toBeInTheDocument();
    // Ensure the link points to the correct path
    expect(screen.getByText("Test Item").closest('a')).toHaveAttribute('href', '/example');
  });
});
