import React from "react";
import { render, screen } from "@testing-library/react";
import Preloader from "./preloader.js";

describe("Preloader", () => {
  test("renders without crashing", () => {
    render(<Preloader />);
    // screen.debug(); // Uncomment for debugging output
  });
});
