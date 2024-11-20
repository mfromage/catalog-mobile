import React from 'react';
import { SignUpFormTestId } from '../components/signup-form';
import SignUpScreen from '../screens/signup-screen';
import { render } from '@/testing/test-util';

describe('SignUpScreen', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<SignUpScreen />);
    expect(getByTestId(SignUpFormTestId.signUp)).toBeTruthy();
  });
});
