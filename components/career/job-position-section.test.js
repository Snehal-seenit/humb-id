import React from "react";
import { render, screen } from "@testing-library/react";
import job_position_section from "./job-position-section";

describe("job-position-section", () => {
  test("renders without crashing", () => {
    render(<job_position_section />);
    // screen.debug();
  });
});
