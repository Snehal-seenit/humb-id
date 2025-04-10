import React from "react";
import { render, screen } from "@testing-library/react";
import comment_input_section from "./comment-input-section";

describe("comment-input-section", () => {
  test("renders without crashing", () => {
    render(<comment_input_section />);
    // screen.debug();
  });
});
