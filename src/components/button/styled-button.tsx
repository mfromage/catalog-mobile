import { ComponentType } from 'react';
import { ButtonContained } from './button-contained';
import { ButtonOutlined } from './button-outlined';
import { ButtonText } from './button-text';
import { ButtonProps } from './button.types';

type ButtonVariant = 'contained' | 'outlined' | 'text';

type StyledButtonProps = {
  variant?: ButtonVariant;
} & ButtonProps;

export const StyledButton = ({
  variant = 'contained',
  ...rest
}: StyledButtonProps) => {
  const buttonRecord: Record<ButtonVariant, ComponentType<ButtonProps>> = {
    contained: ButtonContained,
    outlined: ButtonOutlined,
    text: ButtonText,
  };
  const Button = buttonRecord[variant];
  return <Button {...rest} />;
};
