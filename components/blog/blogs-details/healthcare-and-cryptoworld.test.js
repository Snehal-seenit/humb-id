import React from "react";
import { render, screen } from "@testing-library/react";
import HealthcareAndCryptoworld from "./healthcare-and-cryptoworld.js";

describe("HealthcareAndCryptoworld", () => {
  test("renders without crashing", () => {
    render(<HealthcareAndCryptoworld />);
    // screen.debug(); // Uncomment for debugging output
  });
});
