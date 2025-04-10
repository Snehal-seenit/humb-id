import React from "react";
import { render, screen } from "@testing-library/react";
import filter_gallary_three from "./filter-gallary-three";

describe("filter-gallary-three", () => {
  test("renders without crashing", () => {
    render(<filter_gallary_three />);
    // screen.debug();
  });
});
