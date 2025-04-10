import React from "react";

import { render, screen } from "@testing-library/react";
import art_work_section from "./art-work-section";
describe("art-work-section", () => {
  test("renders without crashing", () => {
    render(<art_work_section />);
    // screen.debug();
  });
});
