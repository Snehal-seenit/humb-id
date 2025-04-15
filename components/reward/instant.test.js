import React from "react";
import { render, screen } from "@testing-library/react";
import Instant from "./instant.js";

describe("Instant", () => {
  test("renders without crashing", () => {
    render(<Instant />);
    // screen.debug(); // Uncomment for debugging output
  });
});
