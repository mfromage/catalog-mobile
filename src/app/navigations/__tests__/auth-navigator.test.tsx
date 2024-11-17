import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@/testing/test-util';
import AuthNavigator from '../auth-navigator';
import { SignInFormTestId } from '@/features/auth/components/signin-form';
import { SignInFormContainerTestId } from '@/features/auth/components/signin-form-container';
import { SignUpFormTestId } from '@/features/auth/components/signup-form';

describe('AuthNavigator', () => {
  it('should navigate from SignIn to SignUp', async () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>,
    );

    expect(getByTestId(SignInFormTestId.signIn)).toBeTruthy();

    const navigateButton = getByTestId(SignInFormContainerTestId.signUp);
    fireEvent.press(navigateButton);

    expect(getByTestId(SignUpFormTestId.signUp)).toBeTruthy();
  });
});
