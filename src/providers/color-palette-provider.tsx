import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  FC,
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
  initialPalette?: ColorPalette;
} & PropsWithChildren;

export const ColorPaletteProvider = ({
  initialPalette,
  children,
}: ColorPaletteProviderProps) => {
  const scheme = useColorScheme();

  const [palette, setPalette] = useState<ColorPalette>(
    (initialPalette ?? scheme === 'dark') ? darkPalette : lightPalette,
  );

  useEffect(() => {
    setPalette(scheme === 'dark' ? darkPalette : lightPalette);
  }, [scheme]);

  return (
    <ColorPaletteContext.Provider value={{ palette }}>
      {children}
    </ColorPaletteContext.Provider>
  );
};
