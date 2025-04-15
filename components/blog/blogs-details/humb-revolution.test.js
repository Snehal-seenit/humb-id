import React from "react";
import { render, screen } from "@testing-library/react";
import HumbRevolution from "./humb-revolution.js";

describe("HumbRevolution", () => {
  test("renders without crashing", () => {
    render(<HumbRevolution />);
    // screen.debug(); // Uncomment for debugging output
  });
});
