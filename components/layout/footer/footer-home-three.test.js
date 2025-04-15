import React from "react";
import { render, screen } from "@testing-library/react";
import FooterHomeThree from "./footer-home-three.js";

describe("FooterHomeThree", () => {
  test("renders without crashing", () => {
    render(<FooterHomeThree />);
    // screen.debug(); // Uncomment for debugging output
  });
});
