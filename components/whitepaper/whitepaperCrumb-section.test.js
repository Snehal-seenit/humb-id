import React from "react";
import { render, screen } from "@testing-library/react";
import WhitepaperCrumbSection from "./whitepaperCrumb-section.js";

describe("WhitepaperCrumbSection", () => {
  test("renders without crashing", () => {
    render(<WhitepaperCrumbSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
