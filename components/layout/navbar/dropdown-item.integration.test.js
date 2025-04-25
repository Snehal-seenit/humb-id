// dropdown-item.integration.test.js
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import DropdownItem from "./dropdown-item";

// ✅ Safe mock for next/link (no ref forwarding required)
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children }) => <a href={href}>{children}</a>,
}));

// ✅ Mock SecondLevelDropdownMenu component
jest.mock("./second-level-dropdown-menu", () => ({
  __esModule: true,
  default: ({ submenu, isClicked }) =>
    isClicked ? (
      <ul data-testid="submenu">
        {submenu.map((item, idx) => (
          <li key={idx}>{item.navItemText}</li>
        ))}
      </ul>
    ) : null,
}));

describe("DropdownItem integration", () => {
  const mockHandleCloseMobileMenu = jest.fn();
  const sampleSubmenu = [
    { navItemText: "Subitem 1", path: "/sub1" },
    { navItemText: "Subitem 2", path: "/sub2" },
  ];

  it("renders a simple nav item without submenu", () => {
    render(
      <ul>
        <DropdownItem
          navItemText="Home"
          path="/home"
          submenu={null}
          handleCloseMobileMenu={mockHandleCloseMobileMenu}
        />
      </ul>
    );

    const link = screen.getByText("Home");
    expect(link).toBeInTheDocument();

    fireEvent.click(link);
    expect(mockHandleCloseMobileMenu).toHaveBeenCalled();
  });

  it("renders nav item with submenu and toggles it on click", () => {
    render(
      <ul>
        <DropdownItem
          navItemText="Services"
          path="#"
          submenu={sampleSubmenu}
          handleCloseMobileMenu={mockHandleCloseMobileMenu}
        />
      </ul>
    );

    const trigger = screen.getByText("Services");
    expect(trigger).toBeInTheDocument();

    fireEvent.click(trigger);
    expect(screen.getByTestId("submenu")).toBeInTheDocument();

    sampleSubmenu.forEach((item) => {
      expect(screen.getByText(item.navItemText)).toBeInTheDocument();
    });
  });
});
