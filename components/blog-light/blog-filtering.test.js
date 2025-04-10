import React from "react";
import { render, screen } from "@testing-library/react";
import blog_filtering from "./blog-filtering";

describe("blog-filtering", () => {
  test("renders without crashing", () => {
    render(<blog_filtering />);
    // screen.debug();
  });
});
