import React from "react";
import { render, screen } from "@testing-library/react";
import contact_form_section from "./contact-form-section";

describe("contact-form-section", () => {
  test("renders without crashing", () => {
    render(<contact_form_section />);
    // screen.debug();
  });
});
