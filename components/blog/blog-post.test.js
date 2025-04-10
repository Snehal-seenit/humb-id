import React from "react";

import { render, screen } from "@testing-library/react";
import blog_post from "./blog-post";
describe("blog-post", () => {
  test("renders without crashing", () => {
    render(<blog_post />);
    // screen.debug();
  });
});
