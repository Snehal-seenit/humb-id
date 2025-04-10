import React from "react";
import { render, screen } from "@testing-library/react";
import preloader from "./preloader";

describe("preloader", () => {
  test("renders without crashing", () => {
    render(<preloader />);
    // screen.debug();
  });
});
