import React from "react";
import { render, screen } from "@testing-library/react";
import CardSliderOne from "./card-slider-one";

describe("CardSliderOne", () => {
  test("renders without crashing", () => {
    render(<CardSliderOne />);
    expect(screen.getByText(/This weeks trending collections/i)).toBeInTheDocument();
  });
});
