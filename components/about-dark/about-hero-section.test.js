import React from "react";
import { render, screen } from "@testing-library/react";
import about_hero_section from "./about-hero-section";

describe("about-hero-section", () => {
  test("renders without crashing", () => {
    render(<about_hero_section />);
    // screen.debug();
  });
});
