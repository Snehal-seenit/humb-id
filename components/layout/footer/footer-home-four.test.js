import React from "react";
import { render, screen } from "@testing-library/react";
import FooterHomeFour from "./footer-home-four.js";

describe("FooterHomeFour", () => {
  test("renders without crashing", () => {
    render(<FooterHomeFour />);
    // screen.debug(); // Uncomment for debugging output
  });
});
