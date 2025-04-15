import { render } from "@testing-library/react";
import React from "react";
import BlogInnerSection from "./blog-inner-section";

// ✅ Mock next/link to avoid "only child" issue during test
jest.mock("next/link", () => {
  return ({ children }) => children;
});

// ✅ Mock dynamic import
jest.mock("next/dynamic", () => () => () => <div>Mocked Blog Filtering</div>);

describe("BlogInnerSection", () => {
  test("renders without crashing", () => {
    render(<BlogInnerSection />);
    // screen.debug(); // Uncomment to debug rendered output
  });
});
