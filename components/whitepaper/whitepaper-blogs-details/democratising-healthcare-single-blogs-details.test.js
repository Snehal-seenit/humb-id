import React from "react";
import { render, screen } from "@testing-library/react";
import DemocratisingHealthcareSingleBlogsDetails from "./democratising-healthcare-single-blogs-details.js";

describe("DemocratisingHealthcareSingleBlogsDetails", () => {
  test("renders without crashing", () => {
    render(<DemocratisingHealthcareSingleBlogsDetails />);
    // screen.debug(); // Uncomment for debugging output
  });
});
