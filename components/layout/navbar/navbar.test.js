import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./navbar.js";

describe("Navbar", () => {
  test("renders without crashing", () => {
    render(<Navbar />);
    // screen.debug(); // Uncomment for debugging output
  });
});
