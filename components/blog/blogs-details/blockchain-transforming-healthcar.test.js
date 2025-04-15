import React from "react";
import { render, screen } from "@testing-library/react";
import BlockchainTransformingHealthcar from "./blockchain-transforming-healthcar.js";

describe("BlockchainTransformingHealthcar", () => {
  test("renders without crashing", () => {
    render(<BlockchainTransformingHealthcar />);
    // screen.debug(); // Uncomment for debugging output
  });
});
