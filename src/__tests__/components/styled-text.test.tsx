import React from 'react';
import StyledText from '@/components/styled-text';
import { mockLightPalette, render } from '@/testing/test-util';
import { normalizeFontSize } from '@/utils/font-size';

describe('StyledText', () => {
  const setup = (props = {}) => {
    const text = 'test text';
    const utils = render(<StyledText {...props}>{text}</StyledText>);
    const element = utils.getByText(text);
    return { ...utils, element };
  };
  it('renders correctly with default props', () => {
    const { element } = setup();
    expect(element).toBeTruthy();
  });

  it('applies the correct variant style', () => {
    const { element } = setup({ variant: 'h1' });
    expect(element.props.style).toContainEqual(
      expect.objectContaining({ fontSize: normalizeFontSize(34) }),
    );
  });

  it('applies the correct color', () => {
    const { element } = setup({ color: 'primary' });
    expect(element.props.style).toContainEqual(
      expect.objectContaining({ color: mockLightPalette.primary.main }),
    );
  });

  it('applies semiBold style', () => {
    const { element } = setup({ semiBold: true });
    expect(element.props.style).toContainEqual(
      expect.objectContaining({ fontWeight: '600' }),
    );
  });

  it('applies italic style', () => {
    const { element } = setup({ italic: true });
    expect(element.props.style).toContainEqual(
      expect.objectContaining({ fontStyle: 'italic' }),
    );
  });

  it('applies underline style', () => {
    const { element } = setup({ underline: true });
    expect(element.props.style).toContainEqual(
      expect.objectContaining({ textDecorationLine: 'underline' }),
    );
  });

  it('applies text alignment', () => {
    const { element } = setup({ alignment: 'center' });
    expect(element.props.style).toContainEqual(
      expect.objectContaining({ textAlign: 'center' }),
    );
  });
});
