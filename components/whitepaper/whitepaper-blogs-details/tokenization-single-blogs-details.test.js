import React from "react";
import { render, screen } from "@testing-library/react";
import tokenization_single_blogs_details from "./tokenization-single-blogs-details";

describe("tokenization-single-blogs-details", () => {
  test("renders without crashing", () => {
    render(<tokenization_single_blogs_details />);
    // screen.debug();
  });
});
