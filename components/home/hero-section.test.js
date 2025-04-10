import React from "react";
import { render, screen } from "@testing-library/react";
import hero_section from "./hero-section";

describe("hero-section", () => {
  test("renders without crashing", () => {
    render(<hero_section />);
    // screen.debug();
  });
});
