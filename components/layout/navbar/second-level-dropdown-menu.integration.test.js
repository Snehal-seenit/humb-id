import { render, screen } from "@testing-library/react";
import React from "react";
import SecondLevelDropdownMenu from "./second-level-dropdown-menu"; // Correct the import path if necessary

describe("Integration: SecondLevelDropdownMenu", () => {
  test("renders and handles basic user interaction", () => {
    // Provide the necessary props for the component (submenu items with titles and paths)
    const submenu = [
      { title: "Submenu Item 1", path: "/submenu-item-1" },
      { title: "Submenu Item 2", path: "/submenu-item-2" },
    ];
    const isClicked = true;

    render(<SecondLevelDropdownMenu submenu={submenu} isClicked={isClicked} />);

    // Check if submenu items are rendered
    expect(screen.getByText("Submenu Item 1")).toBeInTheDocument();
    expect(screen.getByText("Submenu Item 2")).toBeInTheDocument();

    // Check if correct href values are assigned to the submenu items
    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute("href", "/submenu-item-1");
    expect(links[1]).toHaveAttribute("href", "/submenu-item-2");
  });
});
