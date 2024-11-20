import SignUpForm, { SignUpFormTestId } from '../components/signup-form';
import { render, screen, fireEvent, waitFor } from '@/testing/test-util';


describe('SignUpForm', () => {
  const mockOnSubmit = jest.fn();
  const defaultProps = {
    onSubmit: mockOnSubmit,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all form fields correctly', () => {
    render(<SignUpForm {...defaultProps} />);

    expect(screen.getByTestId(SignUpFormTestId.name)).toBeTruthy();
    expect(screen.getByTestId(SignUpFormTestId.email)).toBeTruthy();
    expect(screen.getByTestId(SignUpFormTestId.password)).toBeTruthy();
    expect(screen.getByTestId(SignUpFormTestId.passwordConfirmation)).toBeTruthy();
    expect(screen.getByTestId(SignUpFormTestId.signUp)).toBeTruthy();
  });

  it('displays error message when provided', () => {
    const errorMessage = 'Test error message';
    render(<SignUpForm {...defaultProps} errorMessage={errorMessage} />);

    expect(screen.getByTestId(SignUpFormTestId.errorMessage)).toHaveTextContent(errorMessage);
  });

  it('disables all inputs when disabled prop is true', () => {
    render(<SignUpForm {...defaultProps} disabled={true} />);

    expect(screen.getByTestId(SignUpFormTestId.name).props.disabled).toBe(true);
    expect(screen.getByTestId(SignUpFormTestId.email).props.disabled).toBe(true);
    expect(screen.getByTestId(SignUpFormTestId.password).props.disabled).toBe(true);
    expect(screen.getByTestId(SignUpFormTestId.passwordConfirmation).props.disabled).toBe(true);
    expect(screen.getByTestId(SignUpFormTestId.signUp).props.accessibilityState.disabled).toBe(true);
  });

  it('submits form with valid data', async () => {
    render(<SignUpForm {...defaultProps} />);

    const validFormData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'Password123!',
      password_confirmation: 'Password123!',
    };

    fireEvent.changeText(screen.getByTestId(SignUpFormTestId.name), validFormData.name);
    fireEvent.changeText(screen.getByTestId(SignUpFormTestId.email), validFormData.email);
    fireEvent.changeText(screen.getByTestId(SignUpFormTestId.password), validFormData.password);
    fireEvent.changeText(
      screen.getByTestId(SignUpFormTestId.passwordConfirmation),
      validFormData.password_confirmation
    );

    fireEvent.press(screen.getByTestId(SignUpFormTestId.signUp));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(validFormData, undefined);
    });
  });
});
