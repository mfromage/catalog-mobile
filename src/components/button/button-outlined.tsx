import { Pressable, StyleSheet, View } from 'react-native';
import { buttonStyles } from './button.styles';
import { ButtonProps, combineTextProps } from './button.types';
import StyledText from '../styled-text';
import { useColorPalette } from '@/providers/color-palette-provider';

export const ButtonOutlined = ({
  left,
  style,
  children,
  textProps,
  color = 'primary',
  disabled = false,
  ...rest
}: ButtonProps) => {
  const { palette } = useColorPalette();

  const colorStyles = StyleSheet.create({
    root: {
      borderColor: palette[color].main,
    },
    pressed: {
      borderColor: palette[color].dark,
    },
  });
  const _textColor = disabled ? 'white' : color;

  return (
    <Pressable
      {...rest}
      disabled={disabled}
      style={({ pressed }) => [
        buttonStyles.root,
        colorStyles.root,
        pressed && colorStyles.pressed,
        style,
        disabled && {
          backgroundColor: palette.disabled,
          borderColor: palette.disabled,
        },
      ]}>
      <View style={buttonStyles.contentWrapper}>
        {left}
        {typeof children === 'string' ? (
          <StyledText {...combineTextProps(_textColor, textProps)}>
            {children}
          </StyledText>
        ) : (
          children
        )}
      </View>
    </Pressable>
  );
};
