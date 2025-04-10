import React from "react";

import { render, screen } from "@testing-library/react";
import inovative_service_section from "./inovative-service-section";
describe("inovative-service-section", () => {
  test("renders without crashing", () => {
    render(<inovative_service_section />);
    // screen.debug();
  });
});
