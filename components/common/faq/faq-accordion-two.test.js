import React from "react";

import { render, screen } from "@testing-library/react";
import faq_accordion_two from "./faq-accordion-two";
describe("faq-accordion-two", () => {
  test("renders without crashing", () => {
    render(<faq_accordion_two />);
    // screen.debug();
  });
});
