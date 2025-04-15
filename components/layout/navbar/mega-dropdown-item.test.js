import { render, screen } from "@testing-library/react";
import React from "react";
import MegaDropdownItem from "./mega-dropdown-item.js";

describe("MegaDropdownItem", () => {
  test("renders without crashing", () => {
    const mockDropdownItem = {
      path: "/about",
      title: "About Us"
    };

    render(<MegaDropdownItem dropdownItem={mockDropdownItem} />);
    expect(screen.getByText("About Us")).toBeInTheDocument();
  });
});
