import React from "react";
import { render, screen } from "@testing-library/react";
import roadmap_section from "./roadmap-section";

describe("roadmap-section", () => {
  test("renders without crashing", () => {
    render(<roadmap_section />);
    // screen.debug();
  });
});
