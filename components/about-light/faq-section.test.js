import React from "react";
import { render, screen } from "@testing-library/react";
import faq_section from "./faq-section";

describe("faq-section", () => {
  test("renders without crashing", () => {
    render(<faq_section />);
    // screen.debug();
  });
});
