import React from "react";
import { render, screen } from "@testing-library/react";
import DepositeFee from "./deposite-fee.js";

describe("DepositeFee", () => {
  test("renders without crashing", () => {
    render(<DepositeFee />);
    // screen.debug(); // Uncomment for debugging output
  });
});
