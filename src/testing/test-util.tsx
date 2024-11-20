import { render } from '@testing-library/react-native';
import { PropsWithChildren, ReactElement } from 'react';
import { ColorPaletteProvider } from '@/providers/color-palette-provider';
import { ColorPalette, lightPalette } from '@/themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const mockLightPalette: ColorPalette = {
  ...lightPalette,
  primary: {
    light: '#123456',
    main: '#123456',
    dark: '#123456',
  },
};

export const mockDarkPalette: ColorPalette = {
  ...lightPalette,
  primary: {
    light: '#654321',
    main: '#654321',
    dark: '#654321',
  },
};

const MockProviders = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ColorPaletteProvider dark={mockDarkPalette} light={mockLightPalette}>
      {children}
    </ColorPaletteProvider>
    </QueryClientProvider>
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
