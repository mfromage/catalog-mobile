import { render } from '@testing-library/react-native';
import App from '@/app/app';

// Mock the dependencies
jest.mock('expo-status-bar', () => ({
  StatusBar: 'StatusBar',
}));

jest.mock('@/app/app-initialization', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('@/app/app-providers', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('@/navigations/root-navigator', () => 'RootNavigator');

describe('App', () => {
  it('renders correctly', () => {
    render(<App />);
  });
});
