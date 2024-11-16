import { StyleSheet, Text, TextProps } from 'react-native';
import { useColorPalette } from '@/providers/color-palette-provider';
import {
  typographyStyles,
  TypographyVariant,
  fontFamilyItalic,
  TextAligment,
  BaseColorKey,
} from '@/themes';

export type StyledTextProps = {
  variant?: TypographyVariant;
  color?: BaseColorKey;
  semiBold?: boolean;
  italic?: boolean;
  underline?: boolean;
  alignment?: TextAligment;
} & TextProps;

const StyledText = ({
  style,
  children,
  variant = 'body1',
  color = 'black',
  semiBold = false,
  italic = false,
  underline = false,
  alignment = 'left',
  ...rest
}: StyledTextProps) => {
  const { palette } = useColorPalette();
  const combinedStyles = StyleSheet.flatten([
    typographyStyles[variant],
    { color: palette[color].main },
  ]);

  return (
    <Text
      style={[
        combinedStyles,
        semiBold && styles.semiBold,
        italic && styles.italic,
        underline && styles.underline,
        { textAlign: alignment },
        style,
      ]}
      {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  semiBold: {
    fontWeight: '600',
  },
  italic: {
    fontStyle: 'italic',
    fontFamily: fontFamilyItalic,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});

export default StyledText;
