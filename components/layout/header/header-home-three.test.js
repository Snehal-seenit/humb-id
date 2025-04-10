import React from 'react';
import { render, screen } from "@testing-library/react";
import header_home_three from "./header-home-three";

describe("header-home-three", () => {
  test("renders without crashing", () => {
    render(<header_home_three />);
    // screen.debug();
  });
});
