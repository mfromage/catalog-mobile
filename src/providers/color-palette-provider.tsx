import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { ColorPalette, darkPalette, lightPalette } from '@/themes';

interface ColorPaletteContextType {
  palette: ColorPalette;
  currentScheme: ColorSchemeName;
  togglePalette: () => void;
}

const ColorPaletteContext = createContext<ColorPaletteContextType | undefined>(
  undefined,
);

export const useColorPalette = () => {
  const context = useContext(ColorPaletteContext);
  if (!context) {
    throw new Error('useColorPalette must be used within a ColorPaletteProvider');
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
  const [currentScheme, setCurrentScheme] = useState<ColorSchemeName>(scheme);
  const [palette, setPalette] = useState<ColorPalette>(
    scheme === 'dark' ? dark : light,
  );

  const togglePalette = () => {
    setPalette(palette === light ? dark : light);
    setCurrentScheme(currentScheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setPalette(scheme === 'dark' ? dark : light);
    setCurrentScheme(scheme);
  }, [scheme]);

  return (
    <ColorPaletteContext.Provider value={{ palette, currentScheme, togglePalette }}>
      {children}
    </ColorPaletteContext.Provider>
  );
};
