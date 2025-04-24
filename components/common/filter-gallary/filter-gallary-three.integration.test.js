// File: filter-gallary-three.integration.test.js
import { act, render } from "@testing-library/react";
import Isotope from "isotope-layout";
import FilterGallaryThree from "./filter-gallary-three";

// Mock Isotope layout constructor
jest.mock("isotope-layout", () => {
  return jest.fn().mockImplementation(() => ({
    arrange: jest.fn(),
    destroy: jest.fn(),
  }));
});

test("should render filter gallery and clean up", async () => {
  // Use act to wait for async updates (i.e., useEffect)
  await act(async () => {
    const { unmount } = render(<FilterGallaryThree />);
    // Wait for Isotope to initialize by the useEffect
    setTimeout(() => {
      // Ensure cleanup happens on unmount
      unmount();
      expect(Isotope.mock.instances[0].destroy).toHaveBeenCalled();
    }, 1500); // Adjust the timeout to ensure effect is run
  });
});
