import { StyleSheet } from 'react-native';
import { dimensions } from '@/themes';

export const buttonStyles = StyleSheet.create({
  root: {
    padding: dimensions.spacing.sm,
    borderRadius: dimensions.borderRadius.sm,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: dimensions.spacing.sm,
  },
});
