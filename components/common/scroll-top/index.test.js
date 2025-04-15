import React from "react";
import { render, screen } from "@testing-library/react";
import Index from "./index.js";

describe("Index", () => {
  test("renders without crashing", () => {
    render(<Index />);
    // screen.debug(); // Uncomment for debugging output
  });
});
