import React from 'react';
import { render, screen } from "@testing-library/react";
import footer_home_three from "./footer-home-three";

describe("footer-home-three", () => {
  test("renders without crashing", () => {
    render(<footer_home_three />);
    // screen.debug();
  });
});
