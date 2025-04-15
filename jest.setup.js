// ✅ Extend Jest with custom matchers from @testing-library/jest-dom
import '@testing-library/jest-dom';

// ✅ Mock Next.js router using next-router-mock
jest.mock('next/router', () => require('next-router-mock'));

// ✅ Polyfill for matchMedia (used by react-slick, swiper, and other libs)
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),  // Deprecated, kept for backward compatibility
    removeListener: jest.fn(), // Deprecated, kept for backward compatibility
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  });
}
