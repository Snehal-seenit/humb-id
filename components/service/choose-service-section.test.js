import React from "react";

import { render, screen } from "@testing-library/react";
import choose_service_section from "./choose-service-section";
describe("choose-service-section", () => {
  test("renders without crashing", () => {
    render(<choose_service_section />);
    // screen.debug();
  });
});
