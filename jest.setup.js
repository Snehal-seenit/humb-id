import '@testing-library/jest-dom';

// Mock next/router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      query: {},
    };
  },
}));

// Mock next/image for compatibility
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img alt={props.alt || ''} {...props} />;
  },
}));

// Mock matchMedia for react-slick compatibility
global.matchMedia = global.matchMedia || function() {
  return {
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};
