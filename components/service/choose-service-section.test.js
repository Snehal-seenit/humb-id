import React from "react";
import { render, screen } from "@testing-library/react";
import ChooseServiceSection from "./choose-service-section.js";

describe("ChooseServiceSection", () => {
  test("renders without crashing", () => {
    render(<ChooseServiceSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
