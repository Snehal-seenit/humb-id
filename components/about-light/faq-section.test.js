import React from "react";
import { render, screen } from "@testing-library/react";
import FaqSection from "./faq-section.js";

describe("FaqSection", () => {
  test("renders without crashing", () => {
    render(<FaqSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
