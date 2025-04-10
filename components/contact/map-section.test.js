import React from "react";

import { render, screen } from "@testing-library/react";
import map_section from "./map-section";
describe("map-section", () => {
  test("renders without crashing", () => {
    render(<map_section />);
    // screen.debug();
  });
});
