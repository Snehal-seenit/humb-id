import { render, screen } from "@testing-library/react";
import React from "react";
import SecondLevelDropdownItem from "./second-level-dropdown-item"; // Corrected import (uppercase component name)

describe("second-level-dropdown-item", () => {
  test("renders without crashing", () => {
    render(<SecondLevelDropdownItem navItemText="Test Item" path="/example" />);
    // Ensure the text is rendered correctly
    expect(screen.getByText("Test Item")).toBeInTheDocument();
  });
});
