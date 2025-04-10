import React from "react";

import { render, screen } from "@testing-library/react";
import post_navigation from "./post-navigation";
describe("post-navigation", () => {
  test("renders without crashing", () => {
    render(<post_navigation />);
    // screen.debug();
  });
});
