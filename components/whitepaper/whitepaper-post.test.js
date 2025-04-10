import React from "react";

import { render, screen } from "@testing-library/react";
import whitepaper_post from "./whitepaper-post";
describe("whitepaper-post", () => {
  test("renders without crashing", () => {
    render(<whitepaper_post />);
    // screen.debug();
  });
});
