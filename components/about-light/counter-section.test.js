import React from "react";
import { render, screen } from "@testing-library/react";
import CounterSection from "./counter-section.js";

describe("CounterSection", () => {
  test("renders without crashing", () => {
    render(<CounterSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
