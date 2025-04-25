import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import DropdownItem from "./dropdown-item";

// ✅ Properly mock next/link
jest.mock("next/link", () => {
  return ({ children }) => {
    return children;
  };
});

// ✅ Mock SecondLevelDropdownMenu component
jest.mock("./second-level-dropdown-menu", () => ({
  __esModule: true,
  default: ({ submenu, isClicked }) => {
    return isClicked ? (
      <ul data-testid="second-level-menu">
        {submenu.map((item, idx) => (
          <li key={idx}>{item.navItemText}</li>
        ))}
      </ul>
    ) : null;
  },
}));

describe("DropdownItem", () => {
  const mockHandleCloseMobileMenu = jest.fn();
  const submenuMock = [
    { navItemText: "Subitem 1", path: "/sub1" },
    { navItemText: "Subitem 2", path: "/sub2" },
  ];

  it("renders simple nav item without submenu", () => {
    render(
      <DropdownItem
        navItemText="Home"
        handleCloseMobileMenu={mockHandleCloseMobileMenu}
        path="/home"
      />
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Home"));
    expect(mockHandleCloseMobileMenu).toHaveBeenCalled();
  });

  it("renders nav item with submenu and toggles it on click", () => {
    render(
      <DropdownItem
        navItemText="Services"
        handleCloseMobileMenu={mockHandleCloseMobileMenu}
        submenu={submenuMock}
      />
    );

    const trigger = screen.getByText("Services");
    expect(trigger).toBeInTheDocument();

    // First click should open submenu
    fireEvent.click(trigger);
    expect(screen.getByTestId("second-level-menu")).toBeInTheDocument();
    expect(screen.getByText("Subitem 1")).toBeInTheDocument();
    expect(screen.getByText("Subitem 2")).toBeInTheDocument();

    // Second click should close submenu
    fireEvent.click(trigger);
    expect(screen.queryByTestId("second-level-menu")).toBeNull();
  });
});
