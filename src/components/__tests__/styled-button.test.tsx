import React from 'react';
import { fireEvent, mockLightPalette, render } from '@/testing/test-util';
import { StyledButton } from '../button/styled-button';
import { useColorPalette } from '@/providers/color-palette-provider';

const testId = 'button-1';
const buttonText = 'Button 1';

const setup = (props = {}) => {
  const utils = render(
    <StyledButton {...props} testID={testId}>
      {buttonText}
    </StyledButton>,
  );
  const element = utils.getByTestId(testId);
  return {
    ...utils,
    element,
  };
};

describe('StyledButton', () => {
  it('renders contained button', () => {
    const { element } = setup({
      variant: 'contained',
      color: 'primary',
    });
    expect(element.props.style).toContainEqual(
      expect.objectContaining({
        backgroundColor: mockLightPalette.primary.main,
      }),
    );
  });

  it('renders outlined button', () => {
    const { element } = setup({
      variant: 'outlined',
      color: 'primary',
    });

    expect(element.props.style).toContainEqual(
      expect.objectContaining({ borderColor: mockLightPalette.primary.main }),
    );
  });

  it('renders text button', () => {
    const { getByText } = setup({
      variant: 'outlined',
      color: 'primary',
    });

    const textElement = getByText(buttonText);
    expect(textElement.props.style).toContainEqual(
      expect.objectContaining({ color: mockLightPalette.primary.main }),
    );
  });

  it('call onPress', () => {
    const onPress = jest.fn();
    const { element } = setup({ onPress });

    fireEvent.press(element);
    expect(onPress).toHaveBeenCalled();
  });

  it('onPress is not called on disabled', () => {
    const onPress = jest.fn();
    const { element } = setup({ onPress, disabled: true });

    fireEvent.press(element);
    expect(onPress).not.toHaveBeenCalled();
  });
});
