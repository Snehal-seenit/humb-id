import React from "react";
import { render, screen } from "@testing-library/react";
import communication_section from "./communication-section";

describe("communication-section", () => {
  test("renders without crashing", () => {
    render(<communication_section />);
    // screen.debug();
  });
});
