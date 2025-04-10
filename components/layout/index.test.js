import React from "react";
import { render, screen } from "@testing-library/react";
import index from "./index";

describe("index", () => {
  test("renders without crashing", () => {
    render(<index />);
    // screen.debug();
  });
});
