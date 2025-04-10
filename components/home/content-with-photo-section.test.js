import React from "react";

import { render, screen } from "@testing-library/react";
import content_with_photo_section from "./content-with-photo-section";
describe("content-with-photo-section", () => {
  test("renders without crashing", () => {
    render(<content_with_photo_section />);
    // screen.debug();
  });
});
