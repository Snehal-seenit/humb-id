import React from "react";
import { render, screen } from "@testing-library/react";
import MegaMenu from "./mega-menu.js";

describe("MegaMenu", () => {
  test("renders without crashing", () => {
    render(<MegaMenu />);
    // screen.debug(); // Uncomment for debugging output
  });
});
