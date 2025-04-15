import { render, screen } from "@testing-library/react";
import React from "react";
import DropdownItem from "./dropdown-item.js";

describe("DropdownItem", () => {
  test("renders without crashing", () => {
    render(
      <DropdownItem
        navItemText="Home"
        path="/"
        submenu={null}
        handleCloseMobileMenu={() => {}}
      />
    );
    // Optionally test the rendered content
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
