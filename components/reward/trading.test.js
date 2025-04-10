import React from "react";

import { render, screen } from "@testing-library/react";
import trading from "./trading";
describe("trading", () => {
  test("renders without crashing", () => {
    render(<trading />);
    // screen.debug();
  });
});
