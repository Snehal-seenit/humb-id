import React from "react";

import { render, screen } from "@testing-library/react";
import content_with_photo_section_two from "./content-with-photo-section-two";
describe("content-with-photo-section-two", () => {
  test("renders without crashing", () => {
    render(<content_with_photo_section_two />);
    // screen.debug();
  });
});
