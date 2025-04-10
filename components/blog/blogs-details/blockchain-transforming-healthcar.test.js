import React from "react";

import { render, screen } from "@testing-library/react";
import blockchain_transforming_healthcar from "./blockchain-transforming-healthcar";
describe("blockchain-transforming-healthcar", () => {
  test("renders without crashing", () => {
    render(<blockchain_transforming_healthcar />);
    // screen.debug();
  });
});
