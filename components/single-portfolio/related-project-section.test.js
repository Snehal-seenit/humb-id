import React from "react";

import { render, screen } from "@testing-library/react";
import related_project_section from "./related-project-section";
describe("related-project-section", () => {
  test("renders without crashing", () => {
    render(<related_project_section />);
    // screen.debug();
  });
});
