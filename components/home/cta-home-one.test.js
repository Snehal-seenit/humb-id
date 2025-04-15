import React from "react";
import { render, screen } from "@testing-library/react";
import CtaHomeOne from "./cta-home-one.js";

describe("CtaHomeOne", () => {
  test("renders without crashing", () => {
    render(<CtaHomeOne />);
    // screen.debug(); // Uncomment for debugging output
  });
});
