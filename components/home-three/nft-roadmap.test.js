import React from "react";
import { render, screen } from "@testing-library/react";
import nft_roadmap from "./nft-roadmap";

describe("nft-roadmap", () => {
  test("renders without crashing", () => {
    render(<nft_roadmap />);
    // screen.debug();
  });
});
