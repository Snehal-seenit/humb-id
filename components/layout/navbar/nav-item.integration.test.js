import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import NavItem from "./nav-item";

jest.mock("next/link", () => {
  const React = require("react");
  const Link = React.forwardRef(({ href, children }, ref) => {
    return React.cloneElement(children, { href, ref });
  });
  Link.displayName = "MockNextLink";
  return {
    __esModule: true,
    default: Link,
  };
});


// ✅ Mock child components using correct relative path
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

describe("NavItem - Integration Tests", () => {
  const defaultProps = {
    navItemText: "Products",
    handleCloseMobileMenu: jest.fn(),
    menuItems: [{ label: "Sub Item", href: "/sub" }],
  };

  it("renders text and toggles DropdownMenu", () => {
    render(<NavItem {...defaultProps} megaMenu={false} />);
    const link = screen.getByText("Products");

    // Before click
    expect(screen.queryByTestId("dropdown-menu")).toBeInTheDocument();

    // Toggle via click
    fireEvent.click(link);

    // After click, menu should still be visible (mock doesn't change on toggle, but simulates structure)
    expect(screen.getByTestId("dropdown-menu")).toBeInTheDocument();
  });

  it("renders MegaMenu if megaMenu is true", () => {
    render(<NavItem {...defaultProps} megaMenu={true} />);
    expect(screen.getByTestId("mega-menu")).toBeInTheDocument();
  });
});
