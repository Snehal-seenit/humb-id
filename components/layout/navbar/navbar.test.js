import React from "react";

import { render, screen } from "@testing-library/react";
import navbar from "./navbar";
describe("navbar", () => {
  test("renders without crashing", () => {
    render(<navbar />);
    // screen.debug();
  });
});
