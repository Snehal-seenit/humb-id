// components/about/breadcrumb.test.js

// Import jest-dom for custom matchers
import '@testing-library/jest-dom'; // Correct import
import { render } from '@testing-library/react';
import Breadcrumb from './breadcrumb'; // Ensure this path is correct based on your structure

describe('breadcrumb', () => {
  test('renders without crashing', () => {
    render(<Breadcrumb />); // Use uppercase "B" for the component
  });
});
