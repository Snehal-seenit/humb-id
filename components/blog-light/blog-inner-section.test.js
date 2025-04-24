import { render } from '@testing-library/react';
import BlogInnerSection from './blog-inner-section';

describe('BlogInnerSection', () => {
  test('renders without crashing', () => {
    render(<BlogInnerSection />);
  });
});
