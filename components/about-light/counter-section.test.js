import React from "react";
import { render, screen } from "@testing-library/react";
import counter_section from "./counter-section";

describe("counter-section", () => {
  test("renders without crashing", () => {
    render(<counter_section />);
    // screen.debug();
  });
});
