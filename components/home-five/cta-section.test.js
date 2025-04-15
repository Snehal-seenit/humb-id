import React from "react";
import { render, screen } from "@testing-library/react";
import CtaSection from "./cta-section.js";

describe("CtaSection", () => {
  test("renders without crashing", () => {
    render(<CtaSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
