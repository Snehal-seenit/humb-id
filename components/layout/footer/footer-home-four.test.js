import React from 'react';
import { render, screen } from "@testing-library/react";
import footer_home_four from "./footer-home-four";

describe("footer-home-four", () => {
  test("renders without crashing", () => {
    render(<footer_home_four />);
    // screen.debug();
  });
});
