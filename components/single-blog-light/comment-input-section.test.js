import React from "react";
import { render, screen } from "@testing-library/react";
import CommentInputSection from "./comment-input-section.js";

describe("CommentInputSection", () => {
  test("renders without crashing", () => {
    render(<CommentInputSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
