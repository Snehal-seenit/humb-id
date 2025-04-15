import React from "react";
import { render, screen } from "@testing-library/react";
import FaqAccordionTwo from "./faq-accordion-two.js";

describe("FaqAccordionTwo", () => {
  test("renders without crashing", () => {
    render(<FaqAccordionTwo />);
    // screen.debug(); // Uncomment for debugging output
  });
});
