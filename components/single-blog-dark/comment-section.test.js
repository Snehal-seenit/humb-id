import React from "react";
import { render, screen } from "@testing-library/react";
import comment_section from "./comment-section";

describe("comment-section", () => {
  test("renders without crashing", () => {
    render(<comment_section />);
    // screen.debug();
  });
});
