import React from "react";

import { render, screen } from "@testing-library/react";
import section_one from "./section-one";
describe("section-one", () => {
  test("renders without crashing", () => {
    render(<section_one />);
    // screen.debug();
  });
});
