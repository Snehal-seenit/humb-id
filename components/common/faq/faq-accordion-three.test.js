import React from "react";
import { render, screen } from "@testing-library/react";
import FaqAccordionThree from "./faq-accordion-three.js";

describe("FaqAccordionThree", () => {
  test("renders without crashing", () => {
    render(<FaqAccordionThree />);
    // screen.debug(); // Uncomment for debugging output
  });
});
