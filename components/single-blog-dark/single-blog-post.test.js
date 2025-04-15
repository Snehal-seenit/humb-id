import React from "react";
import { render, screen } from "@testing-library/react";
import SingleBlogPost from "./single-blog-post.js";

describe("SingleBlogPost", () => {
  test("renders without crashing", () => {
    render(<SingleBlogPost />);
    // screen.debug(); // Uncomment for debugging output
  });
});
