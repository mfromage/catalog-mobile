import { render } from '@testing-library/react-native';
import React from 'react';
import SignInScreen from '../screens/signin-screen';

describe('SignInScreen', () => {
  it('should render correctly', () => {
    const { getByText } = render(<SignInScreen />);
    expect(getByText('Sign In Screen')).toBeTruthy();
  });
});
