import React from "react";
import { render, screen } from "@testing-library/react";
import cta_home_one from "./cta-home-one";

describe("cta-home-one", () => {
  test("renders without crashing", () => {
    render(<cta_home_one />);
    // screen.debug();
  });
});
