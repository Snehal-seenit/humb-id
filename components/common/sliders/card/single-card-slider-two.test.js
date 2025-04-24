// single-card-slider-two.unit.test.js
import { fireEvent, render, screen } from '@testing-library/react';
import SingleCardSliderTwo from './single-card-slider-two';

describe('Unit Test: SingleCardSliderTwo', () => {
  const card = {
    img: 'test-img',
    title: 'Test Card Title',
    eth: '1.5',
    name: 'Test User',
    hart: 99,
  };

  test('renders card title and ETH value', () => {
    render(<SingleCardSliderTwo card={card} />);
    
    // Check if the title and ETH value are rendered correctly
    expect(screen.getByText('Test Card Title')).toBeInTheDocument();
    expect(screen.getByText(/1.5 ETH/)).toBeInTheDocument();
  });

  test('renders card name', () => {
    render(<SingleCardSliderTwo card={card} />);
    
    // Check if the name is rendered correctly
    expect(screen.getByText('Test User')).toBeInTheDocument();
  });

  test('button toggles class on click', () => {
    render(<SingleCardSliderTwo card={card} />);
    
    // Check the button before any click
    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('dark-btn');
    
    // Click the button to toggle state
    fireEvent.click(button);
    
    // Check the button after click
    expect(button).toHaveClass('dark-btn');
  });
});
