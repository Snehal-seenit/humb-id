
import { render } from "@testing-library/react";
import React from "react";
import AboutSection from "./about-section.js";

describe("AboutSection", () => {
  test("renders without crashing", () => {
    render(<AboutSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
