import React from 'react';
import { render, screen } from "@testing-library/react";
import header_home_two from "./header-home-two";

describe("header-home-two", () => {
  test("renders without crashing", () => {
    render(<header_home_two />);
    // screen.debug();
  });
});
