import React from "react";
import { render, screen } from "@testing-library/react";
import comment_respond_section from "./comment-respond-section";

describe("comment-respond-section", () => {
  test("renders without crashing", () => {
    render(<comment_respond_section />);
    // screen.debug();
  });
});
