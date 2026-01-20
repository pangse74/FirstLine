import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ResultCard from './ResultCard';
import { phrasesMeta } from '../data/phrases';

// Mock the i18n translation
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => {
      if (key.startsWith('phrases.')) {
        const parts = key.split('.');
        const phraseId = parts[1];
        const textType = parts[2];
        return `Mock ${phraseId} ${textType}`;
      }
      switch (key) {
        case 'result.hashtags':
          return '#TestHashtag';
        case 'result.downloadImageButton':
          return 'Download Image';
        case 'result.copyTextButton':
          return 'Copy Text';
        case 'result.copySuccess':
          return 'Text copied to clipboard!';
        case 'result.copyError':
          return 'Failed to copy text.';
        default:
          return key;
      }
    },
  }),
}));

describe('ResultCard', () => {
  const mockOnRetry = vi.fn();
  const defaultProps = {
    image: 'test-image.jpg',
    onRetry: mockOnRetry,
    analysisType: 'my-photo',
  };

  beforeAll(() => {
    // Mock window.alert
    window.alert = vi.fn();
    // Mock Math.random
    vi.spyOn(Math, 'random').mockReturnValue(0);
  });

  afterAll(() => {
    vi.spyOn(Math, 'random').mockRestore();
    vi.unstubAllGlobals();
  });


  it('renders core phrase and explain phrase', () => {
    render(
      <BrowserRouter>
        <ResultCard {...defaultProps} />
      </BrowserRouter>
    );
    const firstPhraseId = phrasesMeta[0].id;
    expect(screen.getByText(`Mock ${firstPhraseId} core`)).toBeInTheDocument();
    expect(screen.getByText(`▶ Mock ${firstPhraseId} explain`)).toBeInTheDocument();
  });

  it('copies text to clipboard when copy button is clicked', async () => {
    // Mock clipboard API
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: vi.fn().mockResolvedValue(),
      },
      writable: true,
    });

    render(
      <BrowserRouter>
        <ResultCard {...defaultProps} />
      </BrowserRouter>
    );

    const copyButton = screen.getByText('Copy Text');
    fireEvent.click(copyButton);

    const firstPhraseId = phrasesMeta[0].id;
    const expectedText = `Mock ${firstPhraseId} core\n\nMock ${firstPhraseId} explain\n\n#TestHashtag`;
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(expectedText);
  });

});
