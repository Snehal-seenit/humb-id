import React from "react";
import { render, screen } from "@testing-library/react";
import NftRoadmap from "./nft-roadmap.js";

describe("NftRoadmap", () => {
  test("renders without crashing", () => {
    render(<NftRoadmap />);
    // screen.debug(); // Uncomment for debugging output
  });
});
