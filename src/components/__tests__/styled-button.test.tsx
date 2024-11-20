import React from 'react';
import { StyledButton } from '../button/styled-button';
import { fireEvent, mockLightPalette, render } from '@/testing/test-util';

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
    const { element, getByText } = setup({
      variant: 'text',
      color: 'primary',
    });
    expect(element.props.style).toContainEqual(
      expect.objectContaining({
        backgroundColor: 'transparent',
      }),
    );
    expect(element.props.style).toContainEqual(
      expect.objectContaining({
        borderColor: 'transparent',
      }),
    );

    const textElement = getByText(buttonText);
    expect(textElement.props.style).toContainEqual(
      expect.objectContaining({ color: mockLightPalette.primary.main }),
    );
  });

  it('contained call onPress', () => {
    const onPress = jest.fn();
    const { element } = setup({ onPress });

    fireEvent.press(element);
    expect(onPress).toHaveBeenCalled();
  });

  it('outlined call onPress', () => {
    const onPress = jest.fn();
    const { element } = setup({ onPress, variant: 'outlined' });

    fireEvent.press(element);
    expect(onPress).toHaveBeenCalled();
  });

  it('text call onPress', () => {
    const onPress = jest.fn();
    const { element } = setup({ onPress, variant: 'text' });

    fireEvent.press(element);
    expect(onPress).toHaveBeenCalled();
  });

  it('contained onPress is not called on disabled', () => {
    const onPress = jest.fn();
    const { element } = setup({ onPress, disabled: true });

    fireEvent.press(element);
    expect(onPress).not.toHaveBeenCalled();
  });

  it('outlined onPress is not called on disabled', () => {
    const onPress = jest.fn();
    const { element } = setup({ onPress, disabled: true, variant: 'outlined' });

    fireEvent.press(element);
    expect(onPress).not.toHaveBeenCalled();
  });

  it('text onPress is not called on disabled', () => {
    const onPress = jest.fn();
    const { element } = setup({ onPress, disabled: true, variant: 'text' });

    fireEvent.press(element);
    expect(onPress).not.toHaveBeenCalled();
  });
});
