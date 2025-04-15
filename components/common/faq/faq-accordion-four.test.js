import React from "react";
import { render, screen } from "@testing-library/react";
import FaqAccordionFour from "./faq-accordion-four.js";

describe("FaqAccordionFour", () => {
  test("renders without crashing", () => {
    render(<FaqAccordionFour />);
    // screen.debug(); // Uncomment for debugging output
  });
});
