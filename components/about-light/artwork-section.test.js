import React from "react";

import { render, screen } from "@testing-library/react";
import artwork_section from "./artwork-section";
describe("artwork-section", () => {
  test("renders without crashing", () => {
    render(<artwork_section />);
    // screen.debug();
  });
});
