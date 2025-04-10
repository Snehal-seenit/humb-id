import React from "react";

import { render, screen } from "@testing-library/react";
import news_letter from "./news-letter";
describe("news-letter", () => {
  test("renders without crashing", () => {
    render(<news_letter />);
    // screen.debug();
  });
});
