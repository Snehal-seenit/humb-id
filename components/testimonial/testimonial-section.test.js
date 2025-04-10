import React from "react";

import { render, screen } from "@testing-library/react";
import testimonial_section from "./testimonial-section";
describe("testimonial-section", () => {
  test("renders without crashing", () => {
    render(<testimonial_section />);
    // screen.debug();
  });
});
