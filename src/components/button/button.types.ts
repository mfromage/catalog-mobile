import { ReactNode } from 'react';
import { PressableProps, ViewStyle } from 'react-native';
import { StyledTextProps } from '../styled-text';
import { BaseColorKey } from '@/themes';

export type ButtonProps = {
  color?: BaseColorKey;
  children: string | ReactNode;
  style?: ViewStyle;
  textProps?: StyledTextProps;
  left?: ReactNode;
} & Omit<PressableProps, 'style'>;

export const combineTextProps = (
  textColor: BaseColorKey,
  textProps?: StyledTextProps,
): StyledTextProps => {
  return {
    variant: 'body1',
    color: textColor,
    alignment: 'center',
    ...textProps,
  };
};
