import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderHomeTwo from "./header-home-two.js";

describe("HeaderHomeTwo", () => {
  test("renders without crashing", () => {
    render(<HeaderHomeTwo />);
    // screen.debug(); // Uncomment for debugging output
  });
});
