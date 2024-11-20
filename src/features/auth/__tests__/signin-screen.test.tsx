import React from 'react';
import { SignInFormTestId } from '../components/signin-form';
import SignInScreen from '../screens/signin-screen';
import { render } from '@/testing/test-util';

describe('SignInScreen', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<SignInScreen />);
    expect(getByTestId(SignInFormTestId.signIn)).toBeTruthy();
  });
});
