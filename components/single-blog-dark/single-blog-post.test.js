import React from "react";
import { render, screen } from "@testing-library/react";
import single_blog_post from "./single-blog-post";

describe("single-blog-post", () => {
  test("renders without crashing", () => {
    render(<single_blog_post />);
    // screen.debug();
  });
});
