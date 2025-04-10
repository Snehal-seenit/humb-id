import React from "react";
import { render, screen } from "@testing-library/react";
import mission_vision from "./mission-vision";

describe("mission-vision", () => {
  test("renders without crashing", () => {
    render(<mission_vision />);
    // screen.debug();
  });
});
