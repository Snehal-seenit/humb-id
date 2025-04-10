import React from "react";

import { render, screen } from "@testing-library/react";
import logo_section from "./logo-section";
describe("logo-section", () => {
  test("renders without crashing", () => {
    render(<logo_section />);
    // screen.debug();
  });
});
