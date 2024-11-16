import { Platform, TextStyle } from 'react-native';
import { normalizeFontSize } from '@/utils/font-size';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4';

export type TextAligment = 'left' | 'right' | 'center' | 'justify';

const fontFamily = 'NunitoSans';
export const fontFamilyItalic =
  Platform.OS === 'ios' ? 'NunitoSans-Italic' : 'NunitoSans';

export const typographyStyles: Record<TypographyVariant, TextStyle> = {
  h1: {
    fontSize: normalizeFontSize(34),
    fontWeight: '800',
    fontFamily,
  },
  h2: {
    fontSize: normalizeFontSize(28),
    fontWeight: 'bold',
    fontFamily,
  },
  h3: {
    fontSize: normalizeFontSize(22),
    fontWeight: 'semibold',
    fontFamily,
  },
  body1: {
    fontSize: normalizeFontSize(17),
    fontWeight: 'regular',
    fontFamily,
  },
  body2: {
    fontSize: normalizeFontSize(15),
    fontWeight: 'regular',
    fontFamily,
  },
  body3: {
    fontSize: normalizeFontSize(13),
    fontWeight: 'regular',
    fontFamily,
  },
  body4: {
    fontSize: normalizeFontSize(11),
    fontWeight: 'regular',
    fontFamily,
  },
};
