import React from "react";
import { render, screen } from "@testing-library/react";
import footer_home_two from "./footer-home-two";

describe("footer-home-two", () => {
  test("renders without crashing", () => {
    render(<footer_home_two />);
    // screen.debug();
  });
});
