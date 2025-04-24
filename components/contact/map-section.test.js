// map-section.test.js
import { render } from "@testing-library/react";
import React from "react";
import MapSection from "./map-section"; // Correct import

describe("MapSection Unit Test", () => {
  test("renders without crashing", () => {
    const mockLocation = { address: "Mock Address", lat: 0, lng: 0 };
    render(<MapSection location={mockLocation} zoomLevel={10} />);
  });
});
