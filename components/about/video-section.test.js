import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import VideoSection from './video-section';

// ✅ Safe mock for react-modal-video
jest.mock('react-modal-video', () => ({
  __esModule: true,
  default: ({ isOpen, onClose }) =>
    isOpen ? (
      <div data-testid="modal-video">
        Video Modal
        <button onClick={onClose}>Close</button>
      </div>
    ) : null,
}));

describe('VideoSection Component', () => {
  test('renders heading and opens video modal on click', async () => {
    render(<VideoSection />);

    // ✅ Check heading
    expect(screen.getByText(/make work easier/i)).toBeInTheDocument();

    // ✅ Click the popup trigger
    const trigger = document.querySelector('.fugu-popup');
    fireEvent.click(trigger);

    // ✅ Wait for the modal to appear
    await waitFor(() => {
      expect(screen.getByTestId('modal-video')).toBeInTheDocument();
    });
  });
});
