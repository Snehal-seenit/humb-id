import React from "react";
import { render, screen } from "@testing-library/react";
import TestimonialSection from "./testimonial-section.js";

describe("TestimonialSection", () => {
  test("renders without crashing", () => {
    render(<TestimonialSection />);
    // screen.debug(); // Uncomment for debugging output
  });
});
