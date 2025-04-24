// map-section.integration.test.js
import { render } from '@testing-library/react';
import MapSection from './map-section'; // Same folder, correct path

test('should render map section with location', () => {
  const mockLocation = { address: "123 Main St", lat: 0, lng: 0 };
  const { getByText } = render(<MapSection location={mockLocation} zoomLevel={10} />);
  expect(getByText(/123 Main St/i)).toBeInTheDocument();
});
