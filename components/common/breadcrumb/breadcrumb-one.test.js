import React from "react";

import { render, screen } from "@testing-library/react";
import breadcrumb_one from "./breadcrumb-one";
describe("breadcrumb-one", () => {
  test("renders without crashing", () => {
    render(<breadcrumb_one />);
    // screen.debug();
  });
});
