import { render } from "@testing-library/react";
import React from "react";
import ContactSection from "./contact-section.js";

describe("ContactSection", () => {
  test("renders without crashing", () => {
    render(<ContactSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
