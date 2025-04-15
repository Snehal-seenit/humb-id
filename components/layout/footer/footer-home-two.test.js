import React from "react";
import { render, screen } from "@testing-library/react";
import FooterHomeTwo from "./footer-home-two.js";

describe("FooterHomeTwo", () => {
  test("renders without crashing", () => {
    render(<FooterHomeTwo />);
    // screen.debug(); // Uncomment for debugging output
  });
});
