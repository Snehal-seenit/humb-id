import React from "react";
import { render, screen } from "@testing-library/react";
import LocationPin from "./LocationPin";

describe("LocationPin", () => {
  test("renders without crashing", () => {
    render(<LocationPin />);
    // screen.debug();
  });
});
