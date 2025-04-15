import React from "react";
import { render, screen } from "@testing-library/react";
import NewsletterSection from "./newsletter-section.js";

describe("NewsletterSection", () => {
  test("renders without crashing", () => {
    render(<NewsletterSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
