import React from "react";

import { render, screen } from "@testing-library/react";
import single_blog_container from "./single-blog-container";
describe("single-blog-container", () => {
  test("renders without crashing", () => {
    render(<single_blog_container />);
    // screen.debug();
  });
});
