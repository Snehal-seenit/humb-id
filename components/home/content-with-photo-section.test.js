import React from "react";
import { render, screen } from "@testing-library/react";
import ContentWithPhotoSection from "./content-with-photo-section.js";

describe("ContentWithPhotoSection", () => {
  test("renders without crashing", () => {
    render(<ContentWithPhotoSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
