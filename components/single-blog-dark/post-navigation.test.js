import React from "react";
import { render, screen } from "@testing-library/react";
import PostNavigation from "./post-navigation.js";

describe("PostNavigation", () => {
  test("renders without crashing", () => {
    render(<PostNavigation />);
    // screen.debug(); // Uncomment for debugging output
  });
});
