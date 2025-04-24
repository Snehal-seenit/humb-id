// mega-dropdown-item.integration.test.js
import { render } from '@testing-library/react';
import React from 'react';
import MegaDropdownItem from "./mega-dropdown-item";

test('should render dropdown item with href', () => {
  const mockItem = { path: "/test-url", title: "Click Me" };
  const { getByText } = render(<MegaDropdownItem dropdownItem={mockItem} />);
  const link = getByText("Click Me");
  expect(link).toBeInTheDocument();
  expect(link.getAttribute("href")).toBe("/test-url");
});
