import React from "react";
import { render, screen } from "@testing-library/react";
import SingleBlogContainer from "./single-blog-container.js";

describe("SingleBlogContainer", () => {
  test("renders without crashing", () => {
    render(<SingleBlogContainer />);
    // screen.debug(); // Uncomment for debugging output
  });
});
