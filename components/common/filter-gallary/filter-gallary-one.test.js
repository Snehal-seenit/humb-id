import React from "react";
import { render, screen } from "@testing-library/react";
import filter_gallary_one from "./filter-gallary-one";

describe("filter-gallary-one", () => {
  test("renders without crashing", () => {
    render(<filter_gallary_one />);
    // screen.debug();
  });
});
