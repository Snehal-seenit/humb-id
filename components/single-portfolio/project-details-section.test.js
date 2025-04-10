import React from "react";

import { render, screen } from "@testing-library/react";
import project_details_section from "./project-details-section";
describe("project-details-section", () => {
  test("renders without crashing", () => {
    render(<project_details_section />);
    // screen.debug();
  });
});
