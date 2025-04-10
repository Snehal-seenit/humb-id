import React from 'react';
import { render, screen } from "@testing-library/react";
import header_home_five from "./header-home-five";

describe("header-home-five", () => {
  test("renders without crashing", () => {
    render(<header_home_five />);
    // screen.debug();
  });
});
