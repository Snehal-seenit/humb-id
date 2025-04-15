import React from "react";
import { render, screen } from "@testing-library/react";
import WhitepaperSidebarSection from "./whitepaper-sidebar-section.js";

describe("WhitepaperSidebarSection", () => {
  test("renders without crashing", () => {
    render(<WhitepaperSidebarSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
