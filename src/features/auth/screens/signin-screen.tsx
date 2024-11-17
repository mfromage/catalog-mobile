import { View } from 'react-native';
import { AuthScreenNames, AuthScreenProps } from '@/types/auth-navigator.types';
import SignInFormContainer from '../components/signin-form-container';
import commonStyles from '@/themes/common.styles';
import { useColorPalette } from '@/providers/color-palette-provider';

const SignInScreen = ({ navigation }: AuthScreenProps) => {
  const { palette } = useColorPalette();
  const navigateToSignUp = () => navigation?.navigate(AuthScreenNames.signUp);
  const navigateToForgotPassword = () =>
    navigation?.navigate(AuthScreenNames.forgotPassword);
  return (
    <View
      style={[commonStyles.screen, { backgroundColor: palette.background }]}>
      <SignInFormContainer
        onForgotPasswordPress={navigateToForgotPassword}
        onSignUpPress={navigateToSignUp}
      />
    </View>
  );
};

export default SignInScreen;
