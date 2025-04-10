import React from "react";

import { render, screen } from "@testing-library/react";
import tag_section from "./tag-section";
describe("tag-section", () => {
  test("renders without crashing", () => {
    render(<tag_section />);
    // screen.debug();
  });
});
