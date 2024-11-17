import ScreenView from '@/components/screen-view';
import SignUpFormContainer from '../components/signup-form-container';
import { AuthScreenNames, AuthScreenProps } from '@/types/auth-navigator.types';

const SignUpScreen = ({ navigation }: AuthScreenProps) => {
  const navigateToSignIn = () =>
    navigation?.canGoBack()
      ? navigation?.goBack()
      : navigation?.navigate(AuthScreenNames.signIn);
  return (
    <ScreenView>
      <SignUpFormContainer onSignInPress={navigateToSignIn} />
    </ScreenView>
  );
};

export default SignUpScreen;
