import React from "react";
import { render, screen } from "@testing-library/react";
import instant from "./instant";

describe("instant", () => {
  test("renders without crashing", () => {
    render(<instant />);
    // screen.debug();
  });
});
