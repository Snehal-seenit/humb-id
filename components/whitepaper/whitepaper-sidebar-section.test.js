import React from "react";
import { render, screen } from "@testing-library/react";
import whitepaper_sidebar_section from "./whitepaper-sidebar-section";

describe("whitepaper-sidebar-section", () => {
  test("renders without crashing", () => {
    render(<whitepaper_sidebar_section />);
    // screen.debug();
  });
});
