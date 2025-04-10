import React from "react";

import { render, screen } from "@testing-library/react";
import project_about_section from "./project-about-section";
describe("project-about-section", () => {
  test("renders without crashing", () => {
    render(<project_about_section />);
    // screen.debug();
  });
});
