import { render, screen } from "@testing-library/react";
import React from "react";
import SecondLevelDropdownMenu from "./second-level-dropdown-menu";

// Proper mock
jest.mock("./second-level-dropdown-item", () => {
  return function MockedSecondLevelDropdownItem(props) {
    return <div>{props.navItemText}</div>;
  };
});

describe("SecondLevelDropdownMenu", () => {
  test("renders submenu items correctly when clicked", () => {
    const submenu = [
      { title: "Submenu Item 1", path: "/item1" },
      { title: "Submenu Item 2", path: "/item2" }
    ];
    const isClicked = true;

    render(<SecondLevelDropdownMenu submenu={submenu} isClicked={isClicked} />);

    expect(screen.getByText("Submenu Item 1")).toBeInTheDocument();
    expect(screen.getByText("Submenu Item 2")).toBeInTheDocument();
  });
});
