import React from "react";
import { render, screen } from "@testing-library/react";
import CommentSection from "./comment-section.js";

describe("CommentSection", () => {
  test("renders without crashing", () => {
    render(<CommentSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
