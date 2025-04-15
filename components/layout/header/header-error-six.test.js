import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderErrorSix from "./header-error-six.js";

describe("HeaderErrorSix", () => {
  test("renders without crashing", () => {
    render(<HeaderErrorSix />);
    // screen.debug(); // Uncomment for debugging output
  });
});
