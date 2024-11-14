import { render } from '@testing-library/react-native';
import App from '../app';

describe('App', () => {
  it('renders correctly', () => {
    const { getByText } = render(<App />);
    expect(
      getByText('Open up App.tsx to start working on your app!'),
    ).toBeTruthy();
  });
});
