import React from "react";

import { render, screen } from "@testing-library/react";
import faq_accordion_one from "./faq-accordion-one";
describe("faq-accordion-one", () => {
  test("renders without crashing", () => {
    render(<faq_accordion_one />);
    // screen.debug();
  });
});
