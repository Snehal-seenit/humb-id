import React from "react";

import { render, screen } from "@testing-library/react";
import contact_section from "./contact-section";
describe("contact-section", () => {
  test("renders without crashing", () => {
    render(<contact_section />);
    // screen.debug();
  });
});
