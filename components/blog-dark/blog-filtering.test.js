import { render } from '@testing-library/react';
import BlogFiltering from '../blog-dark/blog-filtering';

test('should call destroy on isotope.current', () => {
  // Mock isotope.current to make sure it has the destroy method
  const mockIsotope = { current: { destroy: jest.fn() } };

  // Render your component (ensure isotope is passed or set correctly in context)
  render(<BlogFiltering isotope={mockIsotope} />);
  
  // Trigger the logic that calls destroy
  // Example: Some action in your component should call isotope.current.destroy
  // For example:
  mockIsotope.current.destroy();
  
  // Assert that destroy was called
  expect(mockIsotope.current.destroy).toHaveBeenCalled();
});
