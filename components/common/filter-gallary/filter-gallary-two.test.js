import React from "react";

import { render, screen } from "@testing-library/react";
import filter_gallary_two from "./filter-gallary-two";
describe("filter-gallary-two", () => {
  test("renders without crashing", () => {
    render(<filter_gallary_two />);
    // screen.debug();
  });
});
