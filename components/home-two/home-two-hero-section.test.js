import React from "react";

import { render, screen } from "@testing-library/react";
import home_two_hero_section from "./home-two-hero-section";
describe("home-two-hero-section", () => {
  test("renders without crashing", () => {
    render(<home_two_hero_section />);
    // screen.debug();
  });
});
