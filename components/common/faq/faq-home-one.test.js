import React from "react";
import { render, screen } from "@testing-library/react";
import FaqHomeOne from "./faq-home-one.js";

describe("FaqHomeOne", () => {
  test("renders without crashing", () => {
    render(<FaqHomeOne />);
    // screen.debug(); // Uncomment for debugging output
  });
});
