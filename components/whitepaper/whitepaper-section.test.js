import React from "react";
import { render, screen } from "@testing-library/react";
import WhitepaperSection from "./whitepaper-section.js";

describe("WhitepaperSection", () => {
  test("renders without crashing", () => {
    render(<WhitepaperSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
