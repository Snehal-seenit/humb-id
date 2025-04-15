import { render, screen } from "@testing-library/react";
import React from "react";
import InnerSection from "./inner-section.js";

describe("InnerSection", () => {
  test("renders without crashing", () => {
    render(<InnerSection />);
    // screen.debug(); // Uncomment for debugging output

    // Check for the main heading text
    expect(
      screen.getByRole("heading", { name: /get in touch with us/i })
    ).toBeInTheDocument();
  });
});
