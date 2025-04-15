import React from "react";
import { render, screen } from "@testing-library/react";
import SectionOne from "./section-one.js";

describe("SectionOne", () => {
  test("renders without crashing", () => {
    render(<SectionOne />);
    // screen.debug(); // Uncomment for debugging output
  });
});
