import { render, screen } from '@testing-library/react';
import AboutSection from './about-section';

test('renders heading, paragraph, and swiper slides', async () => {
  render(<AboutSection />);

  // Check the paragraph content
  expect(screen.getByText(/At HUMB, we're not just building a crypto exchange/i)).toBeInTheDocument();

  // Check if all 3 images are rendered (as an indirect check for slides)
  const images = await screen.findAllByAltText(/About Slide/); // This will select all images with alt text starting with "About Slide"
  expect(images).toHaveLength(3); // Expecting 3 images/slides
});
