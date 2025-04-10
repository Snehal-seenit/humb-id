import React from "react";
import { render, screen } from "@testing-library/react";
import humb_revolution from "./humb-revolution";

describe("humb-revolution", () => {
  test("renders without crashing", () => {
    render(<humb_revolution />);
    // screen.debug();
  });
});
