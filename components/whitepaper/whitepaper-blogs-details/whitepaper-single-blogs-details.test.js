import React from "react";
import { render, screen } from "@testing-library/react";
import WhitepaperSingleBlogsDetails from "./whitepaper-single-blogs-details.js";

describe("WhitepaperSingleBlogsDetails", () => {
  test("renders without crashing", () => {
    render(<WhitepaperSingleBlogsDetails />);
    // screen.debug(); // Uncomment for debugging output
  });
});
