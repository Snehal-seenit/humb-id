import React from "react";

import { render, screen } from "@testing-library/react";
import project_thumb_section from "./project-thumb-section";
describe("project-thumb-section", () => {
  test("renders without crashing", () => {
    render(<project_thumb_section />);
    // screen.debug();
  });
});
