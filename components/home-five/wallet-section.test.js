import React from "react";
import { render, screen } from "@testing-library/react";
import wallet_section from "./wallet-section";

describe("wallet-section", () => {
  test("renders without crashing", () => {
    render(<wallet_section />);
    // screen.debug();
  });
});
