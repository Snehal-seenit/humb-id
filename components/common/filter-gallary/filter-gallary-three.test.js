import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom"; // Add this if you're using React Router
import FilterGallaryThree from "./filter-gallary-three"; // Ensure correct import (default export assumed)

// Mock Isotope to avoid issues during tests
jest.mock("isotope-layout", () => jest.fn().mockImplementation(() => ({
  destroy: jest.fn()
})));

describe("FilterGallaryThree", () => {
  test("renders without crashing", () => {
    render(
      <BrowserRouter>
        <FilterGallaryThree />
      </BrowserRouter>
    );
    // screen.debug(); // Uncomment to see rendered output
  });
});
