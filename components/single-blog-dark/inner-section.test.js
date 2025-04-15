import { render, screen } from "@testing-library/react";
import React from "react";
import InnerSection from "./inner-section";

// Mock components for BreadcrumbSection and SingleBlogPost
jest.mock("./breadcrumb-section", () => () => <div>Mock Breadcrumb Section</div>);
jest.mock("./single-blog-post", () => () => <div>Mock Single Blog Post</div>);

describe("InnerSection", () => {
  test("renders without crashing", () => {
    render(<InnerSection />);

    // Check for the presence of the mocked breadcrumb and blog post content
    expect(screen.getByText("Mock Breadcrumb Section")).toBeInTheDocument();
    expect(screen.getByText("Mock Single Blog Post")).toBeInTheDocument();
  });
});
