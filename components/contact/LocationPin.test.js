import React from "react";
import { render, screen } from "@testing-library/react";
import LocationPin from "./LocationPin.js";

describe("LocationPin", () => {
  test("renders without crashing", () => {
    render(<LocationPin />);
    // screen.debug(); // Uncomment for debugging output
  });
});
