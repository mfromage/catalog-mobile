import { AuthScreenNames, AuthScreenProps } from '@/types/auth-navigator.types';
import SignInFormContainer from '../components/signin-form-container';
import ScreenView from '@/components/screen-view';

const SignInScreen = ({ navigation }: AuthScreenProps) => {
  const navigateToSignUp = () => navigation?.navigate(AuthScreenNames.signUp);
  const navigateToForgotPassword = () =>
    navigation?.navigate(AuthScreenNames.forgotPassword);
  return (
    <ScreenView>
      <SignInFormContainer
        onForgotPasswordPress={navigateToForgotPassword}
        onSignUpPress={navigateToSignUp}
      />
    </ScreenView>
  );
};

export default SignInScreen;
