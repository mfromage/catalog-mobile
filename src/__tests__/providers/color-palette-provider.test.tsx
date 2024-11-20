import { render, screen, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';
import { StyledButton } from '@/components/button/styled-button';
import StyledText from '@/components/styled-text';
import { ColorPaletteProvider, useColorPalette } from '@/providers/color-palette-provider';

// Test component to access context values
const TestComponent = () => {
  const { palette, currentScheme, togglePalette } = useColorPalette();
  
  return (
    <View>
      <StyledText testID="current-theme">{currentScheme}</StyledText>
      <StyledText testID="primary-color">{palette.primary.main}</StyledText>
      <StyledButton
        onPress={togglePalette} 
        testID="theme-toggle"
      >
        Toggle Theme
      </StyledButton>
    </View>
  );
};

describe('ColorPaletteProvider', () => {
  it('should provide default theme values', () => {
    render(
      <ColorPaletteProvider>
        <TestComponent />
      </ColorPaletteProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('light');
    expect(screen.getByTestId('primary-color')).toBeTruthy();
  });

  it('should allow theme switching', () => {
    render(
      <ColorPaletteProvider>
        <TestComponent />
      </ColorPaletteProvider>
    );

    const themeToggle = screen.getByTestId('theme-toggle');
    fireEvent.press(themeToggle);

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
  });

  it('should throw error when useColorPalette is used outside provider', () => {
    // Suppress console.error for this test
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useColorPalette must be used within a ColorPaletteProvider');

    consoleSpy.mockRestore();
  });

  it('should provide correct color values for different themes', () => {
    render(
      <ColorPaletteProvider>
        <TestComponent />
      </ColorPaletteProvider>
    );

    // Check initial light theme colors
    const primaryColorElement = screen.getByTestId('primary-color');
    const initialColor = primaryColorElement.props.children;

    // Switch to dark theme
    const themeToggle = screen.getByTestId('theme-toggle');
    fireEvent.press(themeToggle);

    // Color should be different in dark theme
    expect(primaryColorElement.props.children).not.toBe(initialColor);
  });
});
