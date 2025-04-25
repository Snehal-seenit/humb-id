import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import NavItem from "./nav-item";

// ✅ Correct relative mock paths
jest.mock("./dropdown-menu", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="dropdown-menu">DropdownMenu</div>,
  };
});

jest.mock("./mega-menu", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mega-menu">MegaMenu</div>,
  };
});

describe("NavItem - Unit Tests", () => {
  const defaultProps = {
    navItemText: "Menu",
    handleCloseMobileMenu: jest.fn(),
    menuItems: [{ label: "Item 1", href: "/item1" }],
  };

  it("renders nav item text", () => {
    render(<NavItem {...defaultProps} />);
    expect(screen.getByText("Menu")).toBeInTheDocument();
  });

  it("renders DropdownMenu when megaMenu is false", () => {
    render(<NavItem {...defaultProps} megaMenu={false} />);
    expect(screen.getByTestId("dropdown-menu")).toBeInTheDocument();
  });

  it("renders MegaMenu when megaMenu is true", () => {
    render(<NavItem {...defaultProps} megaMenu={true} />);
    expect(screen.getByTestId("mega-menu")).toBeInTheDocument();
  });

  it("toggles dropdown on click", () => {
    render(<NavItem {...defaultProps} />);
    const trigger = screen.getByRole("link", { name: /menu/i });
    fireEvent.click(trigger);
    expect(screen.getByTestId("dropdown-menu")).toBeInTheDocument();
  });
});
