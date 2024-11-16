import { render } from '@testing-library/react-native';
import { PropsWithChildren, ReactElement } from 'react';
import { ColorPaletteProvider } from '@/providers/color-palette-provider';
import { ColorPalette, lightPalette } from '@/themes';

export const mockPalette: ColorPalette = {
  ...lightPalette,
  primary: {
    light: '#123456',
    main: '#123456',
    dark: '#123456',
  },
};
const MockProviders = ({ children }: PropsWithChildren) => {
  return (
    <ColorPaletteProvider initialPalette={mockPalette}>
      {children}
    </ColorPaletteProvider>
  );
};

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => <MockProviders>{children}</MockProviders>,
    ...options,
  });

// Re-export everything from RTL
export * from '@testing-library/react-native';

// Override render method to use customRender
export { customRender as render };
