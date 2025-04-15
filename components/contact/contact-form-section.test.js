import { render, screen } from "@testing-library/react";
import React from "react";
import ContactFormSection from "./contact-form-section";

// ✅ Mock next/link to avoid SSR-only errors during test
jest.mock("next/link", () => {
  return ({ children }) => children;
});

// ✅ Mock next/router to avoid SSR-related issues
jest.mock("next/router", () => ({
  useRouter: () => ({
    route: "/",
    pathname: "/",
    query: "",
    asPath: "/",
  }),
}));

describe("ContactFormSection", () => {
  test("renders without crashing", () => {
    render(<ContactFormSection />);
    const contactForm = screen.getByTestId("contact-form");
    expect(contactForm).toBeInTheDocument();
  });

  test("renders name, email, and message inputs", () => {
    render(<ContactFormSection />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  test("renders submit button", () => {
    render(<ContactFormSection />);
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });
});
