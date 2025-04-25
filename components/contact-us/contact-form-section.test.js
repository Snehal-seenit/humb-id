import { render, screen } from "@testing-library/react";
import React from "react";
import ContactFormSection from "../contact/contact-form-section";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children }) => children,
}));

describe("ContactFormSection", () => {
  test("renders the main heading", () => {
    render(<ContactFormSection />);
    expect(
      screen.getByRole("heading", {
        name: /have any questions/i,
      })
    ).toBeInTheDocument();
  });

  test("renders send button", () => {
    render(<ContactFormSection />);
    expect(
      screen.getByRole("button", { name: /send message/i })
    ).toBeInTheDocument();
  });
});
