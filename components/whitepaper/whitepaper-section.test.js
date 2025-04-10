import React from "react";
import { render, screen } from "@testing-library/react";
import whitepaper_section from "./whitepaper-section";

describe("whitepaper-section", () => {
  test("renders without crashing", () => {
    render(<whitepaper_section />);
    // screen.debug();
  });
});
