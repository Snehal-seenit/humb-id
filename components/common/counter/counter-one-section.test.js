import React from "react";
import { render, screen } from "@testing-library/react";
import counter_one_section from "./counter-one-section";

describe("counter-one-section", () => {
  test("renders without crashing", () => {
    render(<counter_one_section />);
    // screen.debug();
  });
});
