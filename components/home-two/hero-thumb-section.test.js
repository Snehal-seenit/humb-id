import React from "react";

import { render, screen } from "@testing-library/react";
import hero_thumb_section from "./hero-thumb-section";
describe("hero-thumb-section", () => {
  test("renders without crashing", () => {
    render(<hero_thumb_section />);
    // screen.debug();
  });
});
