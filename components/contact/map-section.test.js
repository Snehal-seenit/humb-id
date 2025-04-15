import { render } from "@testing-library/react";
import React from "react";
import MapSection from "./map-section.js";

describe("MapSection", () => {
  test("renders without crashing", () => {
    const mockLocation = {
      lat: 37.7749,
      lng: -122.4194,
      address: "San Francisco, CA"
    };

    const zoomLevel = 10;

    render(<MapSection location={mockLocation} zoomLevel={zoomLevel} />);
    // screen.debug(); // Uncomment to inspect the rendered output
  });
});
