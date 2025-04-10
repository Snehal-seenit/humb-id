import React from 'react';
import { render, screen } from "@testing-library/react";
import header_home_one from "./header-home-one";

describe("header-home-one", () => {
  test("renders without crashing", () => {
    render(<header_home_one />);
    // screen.debug();
  });
});
