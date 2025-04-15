import React from "react";
import { render, screen } from "@testing-library/react";
import Swap from "./swap.js";

describe("Swap", () => {
  test("renders without crashing", () => {
    render(<Swap />);
    // screen.debug(); // Uncomment for debugging output
  });
});
