import { useColorPalette } from '@/providers/color-palette-provider';
import { dimensions } from '@/themes';
import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

const ScreenView = ({ children }: PropsWithChildren) => {
  const { palette } = useColorPalette();
  return (
    <View style={[{ backgroundColor: palette.background }, styles.root]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: dimensions.spacing.md,
    paddingTop: dimensions.spacing.md,
  },
});
export default ScreenView;
