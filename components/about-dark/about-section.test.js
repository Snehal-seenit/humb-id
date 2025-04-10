import React from "react";

import { render, screen } from "@testing-library/react";
import about_section from "./about-section";
describe("about-section", () => {
  test("renders without crashing", () => {
    render(<about_section />);
    // screen.debug();
  });
});
