import React from "react";
import { render, screen } from "@testing-library/react";
import CounterOneSection from "./counter-one-section.js";

describe("CounterOneSection", () => {
  test("renders without crashing", () => {
    render(<CounterOneSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
