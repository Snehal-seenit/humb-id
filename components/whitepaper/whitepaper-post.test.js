import React from "react";
import { render, screen } from "@testing-library/react";
import WhitepaperPost from "./whitepaper-post.js";

describe("WhitepaperPost", () => {
  test("renders without crashing", () => {
    render(<WhitepaperPost />);
    // screen.debug(); // Uncomment for debugging output
  });
});
