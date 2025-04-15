import React from "react";
import { render, screen } from "@testing-library/react";
import FaqAccordionOne from "./faq-accordion-one.js";

describe("FaqAccordionOne", () => {
  test("renders without crashing", () => {
    render(<FaqAccordionOne />);
    // screen.debug(); // Uncomment for debugging output
  });
});
