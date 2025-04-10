import React from "react";
import { render, screen } from "@testing-library/react";
import filter_faq_gallary from "./filter-faq-gallary";

describe("filter-faq-gallary", () => {
  test("renders without crashing", () => {
    render(<filter_faq_gallary />);
    // screen.debug();
  });
});
