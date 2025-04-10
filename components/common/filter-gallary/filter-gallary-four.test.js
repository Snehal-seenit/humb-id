import React from "react";

import { render, screen } from "@testing-library/react";
import filter_gallary_four from "./filter-gallary-four";
describe("filter-gallary-four", () => {
  test("renders without crashing", () => {
    render(<filter_gallary_four />);
    // screen.debug();
  });
});
