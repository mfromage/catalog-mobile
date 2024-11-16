import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { queryClient } from '@/libs/react-query';
import { ColorPaletteProvider } from '@/providers/color-palette-provider';

const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorPaletteProvider>{children}</ColorPaletteProvider>
    </QueryClientProvider>
  );
};

export default AppProviders;
