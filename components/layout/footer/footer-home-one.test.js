import React from 'react';
import { render, screen } from "@testing-library/react";
import footer_home_one from "./footer-home-one";

describe("footer-home-one", () => {
  test("renders without crashing", () => {
    render(<footer_home_one />);
    // screen.debug();
  });
});
