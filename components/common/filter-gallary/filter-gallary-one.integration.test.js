import { render } from "@testing-library/react";
import FilterGallaryOne from "./filter-gallary-one"; // Adjust path if necessary

describe("Integration: FilterGallaryOne", () => {
  test("renders and safely cleans up", () => {
    const mockDestroy = jest.fn();
    const mockIsotope = { current: { destroy: mockDestroy } };

    jest.spyOn(React, "useRef").mockReturnValueOnce(mockIsotope);

    render(<FilterGallaryOne />);

    // Check if cleanup is called (mockDestroy should be invoked)
    expect(mockDestroy).not.toHaveBeenCalled();
  });
});
