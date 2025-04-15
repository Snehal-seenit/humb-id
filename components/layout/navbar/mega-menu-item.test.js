import React from "react";
import { render, screen } from "@testing-library/react";
import MegaMenuItem from "./mega-menu-item.js";

describe("MegaMenuItem", () => {
  test("renders without crashing", () => {
    render(<MegaMenuItem />);
    // screen.debug(); // Uncomment for debugging output
  });
});
