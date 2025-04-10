import React from "react";

import { render, screen } from "@testing-library/react";
import whitepaperCrumb_section from "./whitepaperCrumb-section";
describe("whitepaperCrumb-section", () => {
  test("renders without crashing", () => {
    render(<whitepaperCrumb_section />);
    // screen.debug();
  });
});
