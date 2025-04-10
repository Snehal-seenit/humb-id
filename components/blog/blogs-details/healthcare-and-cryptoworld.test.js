import React from "react";

import { render, screen } from "@testing-library/react";
import healthcare_and_cryptoworld from "./healthcare-and-cryptoworld";
describe("healthcare-and-cryptoworld", () => {
  test("renders without crashing", () => {
    render(<healthcare_and_cryptoworld />);
    // screen.debug();
  });
});
