import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import ContactFormSection from "./contact-form-section";

describe("ContactFormSection integration", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      })
    );
  });

  
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("submits form with valid input", async () => {
    render(<ContactFormSection />);

    fireEvent.change(screen.getByPlaceholderText("First Name*"), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email*"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Phone*"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByPlaceholderText("Subject*"), {
      target: { value: "Test Subject" },
    });
    fireEvent.change(screen.getByPlaceholderText("Your Message*"), {
      target: { value: "This is a test message." },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit now/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    const fetchCallArgs = fetch.mock.calls[0];
    const requestBody = fetchCallArgs[1].body;

    // Handle both JSON string or plain object bodies
    let bodyObj;
    if (typeof requestBody === "string") {
      try {
        bodyObj = JSON.parse(requestBody);
      } catch (err) {
        throw new Error("Fetch body was not valid JSON string");
      }
    } else if (requestBody instanceof FormData) {
      bodyObj = {};
      for (const [key, value] of requestBody.entries()) {
        bodyObj[key] = value;
      }
    } else if (typeof requestBody === "object") {
      bodyObj = requestBody;
    } else {
      throw new Error("Unknown body format in fetch call");
    }

    expect(bodyObj).toEqual({
      first_name: "Jane Doe",
      email: "jane@example.com",
      phone: "1234567890",
      submit: "Test Subject",
      message: "This is a test message.",
    });
  });
});
