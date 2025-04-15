import React from "react";
import { render, screen } from "@testing-library/react";
import Breadcrumb from "./breadcrumb.js";

describe("Breadcrumb", () => {
  test("renders without crashing", () => {
    render(<Breadcrumb />);
    // screen.debug(); // Uncomment for debugging output
  });
});
