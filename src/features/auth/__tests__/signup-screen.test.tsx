import { render } from '@/testing/test-util';
import React from 'react';
import SignUpScreen from '../screens/signup-screen';
import { SignUpFormTestId } from '../components/signup-form';

describe('SignUpScreen', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<SignUpScreen />);
    expect(getByTestId(SignUpFormTestId.signUp)).toBeTruthy();
  });
});
