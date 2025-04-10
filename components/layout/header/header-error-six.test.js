import React from "react";
import { render, screen } from "@testing-library/react";
import header_error_six from "./header-error-six";

describe("header-error-six", () => {
  test("renders without crashing", () => {
    render(<header_error_six />);
    // screen.debug();
  });
});
