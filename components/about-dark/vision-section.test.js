import React from "react";

import { render, screen } from "@testing-library/react";
import vision_section from "./vision-section";
describe("vision-section", () => {
  test("renders without crashing", () => {
    render(<vision_section />);
    // screen.debug();
  });
});
