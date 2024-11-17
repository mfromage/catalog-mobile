import { StyleSheet } from 'react-native';
import { dimensions } from './dimension';

const commonStyles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: dimensions.spacing.md,
    paddingTop: dimensions.spacing.md,
  },
});

export default commonStyles;
