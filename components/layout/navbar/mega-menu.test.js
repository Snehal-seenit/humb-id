import { render, screen } from "@testing-library/react";
import React from "react";
import MegaMenu from "./mega-menu"; // Corrected import (uppercase component name)

describe("mega-menu", () => {
  test("renders without crashing", () => {
    render(<MegaMenu menuItems={[]} />);
    // You can optionally check for something that ensures it's rendered
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
