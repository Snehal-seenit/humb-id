import React from "react";
import { render, screen } from "@testing-library/react";
import CommentListSection from "./comment-list-section.js";

describe("CommentListSection", () => {
  test("renders without crashing", () => {
    render(<CommentListSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
