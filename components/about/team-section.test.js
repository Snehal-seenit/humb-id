// TeamSection.test.tsx
import { render, screen } from '@testing-library/react';
import React from 'react';
import TeamSection from './team-section';

describe('TeamSection Component', () => {
  test('renders the main heading', () => {
    render(<TeamSection />);
    const heading = screen.getByText(/2025 is the right time for HUMB healthcare focused crypto exchange platform/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders the introductory paragraph', () => {
    render(<TeamSection />);
    const paragraph = screen.getByText(/2025 presents a unique convergence of technological advancements/i);
    expect(paragraph).toBeInTheDocument();
  });

  test('renders all major section headings', () => {
    render(<TeamSection />);
    const headings = [
      /Increasing Blockchain Adoption in Healthcare/i,
      /Favorable Market Conditions/i,
      /Unmet Needs in the Healthcare Industry/i,
      /Generative AI and Blockchain Synergy/i,
      /Competitive Advantage/i,
      /Conclusion/i
    ];
    
    headings.forEach(headingText => {
      const heading = screen.getByText(headingText);
      expect(heading).toBeInTheDocument();
    });
  });

  test('renders all sub-section items', () => {
    render(<TeamSection />);
    const subSections = [
      /Rewarding Traders and KYH/i,
      /Tokenization of Healthcare Assets/i,
      /Decentralized Healthcare Systems/i,
      /Real-World Applications/i,
      /Crypto Market Recovery/i,
      /Regulatory Clarity/i,
      /Innovations in Tokenization/i,
      /Interoperability and Data Sharing/i,
      /Funding Medical Innovation/i,
      /Patient Incentivization/i,
      /AI-Driven Healthcare Insights/i,
      /Blockchain for Bias-Free AI/i,
      /First-Mover Advantage/i,
      /Specialized Ecosystem/i
    ];
    
    subSections.forEach(text => {
      const element = screen.getByText(text);
      expect(element).toBeInTheDocument();
    });
  });

  test('renders all bullet point items under "Rewarding Traders" section', () => {
    render(<TeamSection />);
    const bulletPoints = [
      /Traders holding HUMB Native Tokens/i,
      /Traders trading in Healthcare Tokens on HUMB exchange/i,
      /Traders who demonstrate KYH because they are involved in healthcare/i
    ];
    
    bulletPoints.forEach(text => {
      const element = screen.getByText(text);
      expect(element).toBeInTheDocument();
    });
  });

  test('renders the profit sharing information', () => {
    render(<TeamSection />);
    // More flexible matching for text inside small tags
    const profitText = screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'small' && 
             content.includes('14% of HUMB') && 
             content.includes('Profit will be shared with');
    });
    expect(profitText).toBeInTheDocument();
  });

  test('renders the conclusion paragraph', () => {
    render(<TeamSection />);
    const conclusion = screen.getByText(/2025 offers a rare alignment of factors/i);
    expect(conclusion).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<TeamSection />);
    expect(asFragment()).toMatchSnapshot();
  });
});