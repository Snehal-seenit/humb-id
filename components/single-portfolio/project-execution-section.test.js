import React from "react";
import { render, screen } from "@testing-library/react";
import project_execution_section from "./project-execution-section";

describe("project-execution-section", () => {
  test("renders without crashing", () => {
    render(<project_execution_section />);
    // screen.debug();
  });
});
