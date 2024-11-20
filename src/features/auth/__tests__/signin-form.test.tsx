import React from 'react';
import { render, fireEvent, screen, waitFor } from '@/testing/test-util';
import SignInForm, { SignInFormTestId } from '../components/signin-form';
import { SignInRequest } from '../types/auth.types';

describe('SignInForm', () => {
  const mockOnSubmit = jest.fn();
  const mockOnForgotPasswordPress = jest.fn();

  const defaultProps = {
    onSubmit: mockOnSubmit,
    onForgotPasswordPress: mockOnForgotPasswordPress,
    errorMessage: undefined,
    disabled: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all form elements correctly', () => {
    render(<SignInForm {...defaultProps} />);

    expect(screen.getByTestId(SignInFormTestId.email)).toBeTruthy();
    expect(screen.getByTestId(SignInFormTestId.password)).toBeTruthy();
    expect(screen.getByTestId(SignInFormTestId.forgotPassword)).toBeTruthy();
    expect(screen.getByTestId(SignInFormTestId.signIn)).toBeTruthy();
  });

  it('displays error message when provided', () => {
    const errorMessage = 'Invalid credentials';
    render(<SignInForm {...defaultProps} errorMessage={errorMessage} />);

    expect(screen.getByTestId(SignInFormTestId.errorMessage)).toHaveTextContent(
      errorMessage,
    );
  });

  it('handles forgot password press', () => {
    render(<SignInForm {...defaultProps} />);

    fireEvent.press(screen.getByTestId(SignInFormTestId.forgotPassword));
    expect(mockOnForgotPasswordPress).toHaveBeenCalledTimes(1);
  });

  it('submits form with valid data', async () => {
    render(<SignInForm {...defaultProps} />);

    const validData: SignInRequest = {
      email: 'test@example.com',
      password: 'Password123!',
    };

    fireEvent.changeText(
      screen.getByTestId(SignInFormTestId.email),
      validData.email,
    );
    fireEvent.changeText(
      screen.getByTestId(SignInFormTestId.password),
      validData.password,
    );

    fireEvent.press(screen.getByTestId(SignInFormTestId.signIn));
    
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(validData, undefined);
    });
  });

  it('shows validation errors for invalid email', async () => {
    render(<SignInForm {...defaultProps} />);

    fireEvent.changeText(screen.getByTestId(SignInFormTestId.email), 'invalid-email');
    fireEvent.changeText(
      screen.getByTestId(SignInFormTestId.password),
      'Password123!',
    );

    fireEvent.press(screen.getByTestId(SignInFormTestId.signIn));

    await waitFor(() => {
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  it('shows validation errors for invalid password', async () => {
    render(<SignInForm {...defaultProps} />);

    fireEvent.changeText(
      screen.getByTestId(SignInFormTestId.email),
      'test@example.com',
    );
    fireEvent.changeText(screen.getByTestId(SignInFormTestId.password), '123'); // Too short

    fireEvent.press(screen.getByTestId(SignInFormTestId.signIn));

    await waitFor(() => {
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  it('disables all form elements when disabled prop is true', () => {
    render(<SignInForm {...defaultProps} disabled={true} />);

    const emailInput = screen.getByTestId(SignInFormTestId.email);
    const passwordInput = screen.getByTestId(SignInFormTestId.password);
    const forgotPasswordButton = screen.getByTestId(SignInFormTestId.forgotPassword);
    const signInButton = screen.getByTestId(SignInFormTestId.signIn);

    expect(emailInput.props.disabled).toBe(true);
    expect(passwordInput.props.disabled).toBe(true);
    expect(forgotPasswordButton.props.accessibilityState.disabled).toBe(true);
    expect(signInButton.props.accessibilityState.disabled).toBe(true);
  });

});
