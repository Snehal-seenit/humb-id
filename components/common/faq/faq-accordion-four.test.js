import React from "react";

import { render, screen } from "@testing-library/react";
import faq_accordion_four from "./faq-accordion-four";
describe("faq-accordion-four", () => {
  test("renders without crashing", () => {
    render(<faq_accordion_four />);
    // screen.debug();
  });
});
