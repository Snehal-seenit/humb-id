import React from "react";
import { render, screen } from "@testing-library/react";
import NewsLetter from "./news-letter.js";

describe("NewsLetter", () => {
  test("renders without crashing", () => {
    render(<NewsLetter />);
    // screen.debug(); // Uncomment for debugging output
  });
});
