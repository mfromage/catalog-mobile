import { render } from '@/testing/test-util';
import React from 'react';
import SignInScreen from '../screens/signin-screen';
import { SignInFormTestId } from '../components/signin-form';

describe('SignInScreen', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<SignInScreen />);
    expect(getByTestId(SignInFormTestId.signIn)).toBeTruthy();
  });
});
