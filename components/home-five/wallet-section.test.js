import React from "react";
import { render, screen } from "@testing-library/react";
import WalletSection from "./wallet-section.js";

describe("WalletSection", () => {
  test("renders without crashing", () => {
    render(<WalletSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
