import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Base dimensions for a standard device (e.g., iPhone 8)
const baseWidth = 375;
const baseHeight = 667;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;

const scale = Math.min(scaleWidth, scaleHeight);

export const normalizeFontSize = (size: number) => Math.round(size * scale);
