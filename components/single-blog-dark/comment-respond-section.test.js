import React from "react";
import { render, screen } from "@testing-library/react";
import CommentRespondSection from "./comment-respond-section.js";

describe("CommentRespondSection", () => {
  test("renders without crashing", () => {
    render(<CommentRespondSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
