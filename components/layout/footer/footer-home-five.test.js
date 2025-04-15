import { render } from "@testing-library/react";
import React from "react";
import FooterHomeFive from "./footer-home-five.js";

describe("FooterHomeFive", () => {
  test("renders without crashing", () => {
    render(<FooterHomeFive />);
    // screen.debug(); // Uncomment for debugging output
  });
});