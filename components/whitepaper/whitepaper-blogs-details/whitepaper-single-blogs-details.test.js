import React from "react";

import { render, screen } from "@testing-library/react";
import whitepaper_single_blogs_details from "./whitepaper-single-blogs-details";
describe("whitepaper-single-blogs-details", () => {
  test("renders without crashing", () => {
    render(<whitepaper_single_blogs_details />);
    // screen.debug();
  });
});
