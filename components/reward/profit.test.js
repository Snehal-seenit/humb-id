import React from "react";
import { render, screen } from "@testing-library/react";
import profit from "./profit";

describe("profit", () => {
  test("renders without crashing", () => {
    render(<profit />);
    // screen.debug();
  });
});
