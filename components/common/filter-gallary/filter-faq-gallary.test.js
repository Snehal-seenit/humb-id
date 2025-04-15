import React from "react";
import { render, screen } from "@testing-library/react";
import FilterFaqGallary from "./filter-faq-gallary.js";

describe("FilterFaqGallary", () => {
  test("renders without crashing", () => {
    render(<FilterFaqGallary />);
    // screen.debug(); // Uncomment for debugging output
  });
});
