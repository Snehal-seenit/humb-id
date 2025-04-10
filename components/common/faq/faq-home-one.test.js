import React from "react";
import { render, screen } from "@testing-library/react";
import faq_home_one from "./faq-home-one";

describe("faq-home-one", () => {
  test("renders without crashing", () => {
    render(<faq_home_one />);
    // screen.debug();
  });
});
