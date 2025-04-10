import React from "react";
import { render, screen } from "@testing-library/react";
import communicate_section from "./communicate-section";

describe("communicate-section", () => {
  test("renders without crashing", () => {
    render(<communicate_section />);
    // screen.debug();
  });
});
