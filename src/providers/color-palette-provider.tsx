import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from 'react';
import { useColorScheme } from 'react-native';
import { ColorPalette, darkPalette, lightPalette } from '@/themes';

interface ColorPaletteContextType {
  palette: ColorPalette;
}

const ColorPaletteContext = createContext<ColorPaletteContextType | undefined>(
  undefined,
);

export const useColorPalette = () => {
  const context = useContext(ColorPaletteContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

type ColorPaletteProviderProps = {
  light?: ColorPalette;
  dark?: ColorPalette;
} & PropsWithChildren;

export const ColorPaletteProvider = ({
  light = lightPalette,
  dark = darkPalette,
  children,
}: ColorPaletteProviderProps) => {
  const scheme = useColorScheme();
  const [palette, setPalette] = useState<ColorPalette>(
    scheme === 'dark' ? dark : light,
  );

  useEffect(() => {
    setPalette(scheme === 'dark' ? dark : light);
  }, [scheme]);

  return (
    <ColorPaletteContext.Provider value={{ palette }}>
      {children}
    </ColorPaletteContext.Provider>
  );
};
