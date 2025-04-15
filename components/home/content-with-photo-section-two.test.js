import React from "react";
import { render, screen } from "@testing-library/react";
import ContentWithPhotoSectionTwo from "./content-with-photo-section-two.js";

describe("ContentWithPhotoSectionTwo", () => {
  test("renders without crashing", () => {
    render(<ContentWithPhotoSectionTwo />);
    // screen.debug(); // Uncomment for debugging output
  });
});
