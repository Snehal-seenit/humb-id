import React from "react";

import { render, screen } from "@testing-library/react";
import comment_list_section from "./comment-list-section";
describe("comment-list-section", () => {
  test("renders without crashing", () => {
    render(<comment_list_section />);
    // screen.debug();
  });
});
