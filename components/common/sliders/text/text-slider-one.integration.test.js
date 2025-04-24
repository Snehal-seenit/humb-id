import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TextSliderOne from "./text-slider-one.js";

describe("Integration: TextSliderOne", () => {
  test("renders and handles basic user interaction", () => {
    render(<TextSliderOne />);

    // Example checks – customize these!
    // const button = screen.getByRole("button", { name: /submit/i });
    // fireEvent.click(button);
    // expect(screen.getByText(/success/i)).toBeInTheDocument();
  });
});
