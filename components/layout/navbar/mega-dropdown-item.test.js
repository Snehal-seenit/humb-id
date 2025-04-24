// mega-dropdown-item.test.js
import { render } from "@testing-library/react";
import React from "react";
import MegaDropdownItem from "./mega-dropdown-item";

describe("MegaDropdownItem Unit Test", () => {
  test("renders without crashing", () => {
    const mockItem = { path: "/example", title: "Example" };
    const { getByText } = render(<MegaDropdownItem dropdownItem={mockItem} />);
    expect(getByText("Example")).toBeInTheDocument();
  });
});
