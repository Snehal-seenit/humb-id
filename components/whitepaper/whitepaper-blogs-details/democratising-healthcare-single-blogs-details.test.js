import React from "react";

import { render, screen } from "@testing-library/react";
import democratising_healthcare_single_blogs_details from "./democratising-healthcare-single-blogs-details";
describe("democratising-healthcare-single-blogs-details", () => {
  test("renders without crashing", () => {
    render(<democratising_healthcare_single_blogs_details />);
    // screen.debug();
  });
});
