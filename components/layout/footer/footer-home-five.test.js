import React from 'react';
import { render, screen } from "@testing-library/react";
import footer_home_five from "./footer-home-five";

describe("footer-home-five", () => {
  test("renders without crashing", () => {
    render(<footer_home_five />);
    // screen.debug();
  });
});
