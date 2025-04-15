import React from "react";
import { render, screen } from "@testing-library/react";
import InnerSection from "./inner-section.js";

describe("InnerSection", () => {
  test("renders without crashing", () => {
    render(<InnerSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
