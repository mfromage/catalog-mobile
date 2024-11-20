import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '@/navigations/auth-navigator';
import { SignInFormTestId } from '@/features/auth/components/signin-form';
import { SignInFormContainerTestId } from '@/features/auth/components/signin-form-container';
import { SignUpFormTestId } from '@/features/auth/components/signup-form';
import { render, fireEvent } from '@/testing/test-util';

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
