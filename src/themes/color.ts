export const basePalette = {
  primary: {
    light: '#5672BD',
    main: '#2C4FAD',
    dark: '#01205F',
  },
  secondary: {
    light: '#F9F9FA',
    main: '#F7F7F9',
    dark: '#E1E1E4',
  },
  tertiary: {
    light: '#A6C9F9',
    main: '#96BFF1',
    dark: '#6D95D1',
  },

  black: {
    light: '#555555',
    main: '#2B2B2B',
    dark: '#222222',
  },
  white: {
    light: '#FFFFFF',
    main: '#FFFFFF',
    dark: '#CCCCCC',
  },
  danger: {
    light: '#EF9A9A',
    main: '#D32F2F',
    dark: '#B71C1C',
  },
  input: {
    background: '#F7F7F9',
    placeholder: '#8F959E',
  },
  tab: {
    default: '#9199A7',
    selected: '#2C4FAD',
  },
  disabled: '#AAB3C7',
  background: '#ffffff',
  backgroundSecondary: '#F1F7FF',
  backgroundHeader: '#C5DFFF',
};

export type ColorPalette = typeof basePalette;

export type BaseColorKey =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'black'
  | 'white'
  | 'danger';
export type BaseColor = Pick<ColorPalette, BaseColorKey>;

export const lightPalette = basePalette;

//todo: update dark color
export const darkPalette: ColorPalette = {
  ...basePalette,
};
