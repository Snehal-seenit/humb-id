import React from "react";
import { render, screen } from "@testing-library/react";
import faq_accordion_three from "./faq-accordion-three";

describe("faq-accordion-three", () => {
  test("renders without crashing", () => {
    render(<faq_accordion_three />);
    // screen.debug();
  });
});
