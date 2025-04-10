import React from "react";

import { render, screen } from "@testing-library/react";
import blockquote_section from "./blockquote-section";
describe("blockquote-section", () => {
  test("renders without crashing", () => {
    render(<blockquote_section />);
    // screen.debug();
  });
});
