import React from "react";
import { render, screen } from "@testing-library/react";
import InnserSection from "./innser-section.js";

describe("InnserSection", () => {
  test("renders without crashing", () => {
    render(<InnserSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
