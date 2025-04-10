import React from 'react';
import { render, screen } from "@testing-library/react";
import header_home_four from "./header-home-four";

describe("header-home-four", () => {
  test("renders without crashing", () => {
    render(<header_home_four />);
    // screen.debug();
  });
});
