import React from "react";
import { render, screen } from "@testing-library/react";
import ContactFormSection from "./contact-form-section.js";

describe("ContactFormSection", () => {
  test("renders without crashing", () => {
    render(<ContactFormSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
