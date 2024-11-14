import React from 'react';
import { render } from '@testing-library/react-native';
import SignUpScreen from '../screens/signup-screen';

describe('SignUpScreen', () => {
  it('should render correctly', () => {
    const { getByText } = render(<SignUpScreen />);
    expect(getByText('Sign Up Screen')).toBeTruthy();
  });
});
