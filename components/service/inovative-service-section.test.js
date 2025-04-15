import React from "react";
import { render, screen } from "@testing-library/react";
import InovativeServiceSection from "./inovative-service-section.js";

describe("InovativeServiceSection", () => {
  test("renders without crashing", () => {
    render(<InovativeServiceSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
