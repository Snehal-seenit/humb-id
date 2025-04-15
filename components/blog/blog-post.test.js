import React from "react";
import { render, screen } from "@testing-library/react";
import BlogPost from "./blog-post.js";

describe("BlogPost", () => {
  test("renders without crashing", () => {
    render(<BlogPost />);
    // screen.debug(); // Uncomment for debugging output
  });
});
