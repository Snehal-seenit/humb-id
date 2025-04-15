import React from "react";
import { render, screen } from "@testing-library/react";
import LogoSection from "./logo-section.js";

describe("LogoSection", () => {
  test("renders without crashing", () => {
    render(<LogoSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
