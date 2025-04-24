import { render, screen } from "@testing-library/react";
import React from "react";
import DropdownMenu from "./dropdown-menu";

describe("Integration: DropdownMenu", () => {
  const mockMenuItems = [
    { title: "Home", path: "/home", submenu: [] },
    { title: "About", path: "/about", submenu: [] },
  ];

  const mockClose = jest.fn();

  test("renders items and handles interaction", () => {
    render(
      <DropdownMenu
        isOpenDropDown={true}
        handleCloseMobileMenu={mockClose}
        menuItems={mockMenuItems}
      />
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });
});
