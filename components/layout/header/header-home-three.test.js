import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderHomeThree from "./header-home-three.js";

describe("HeaderHomeThree", () => {
  test("renders without crashing", () => {
    render(<HeaderHomeThree />);
    // screen.debug(); // Uncomment for debugging output
  });
});
