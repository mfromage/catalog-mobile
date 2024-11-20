import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import SignInForm from './signin-form';
import { StyledButton } from '@/components/button/styled-button';
import { dimensions } from '@/themes';
import StyledText from '@/components/styled-text';
import { SignInRequest } from '../types/auth.types';
import GoogleIcon from '@/components/svg/google-icon';
import useSignIn from '../hooks/use-signin';

type SignInFormContainerProps = {
  onSignUpPress: () => void;
  onForgotPasswordPress: () => void;
};

const SignInFormContainer = ({
  onSignUpPress,
  onForgotPasswordPress,
}: SignInFormContainerProps) => {
  const { t } = useTranslation();
  const { mutate: signIn, error, isPending } = useSignIn();
  return (
    <View style={styles.container}>
      <StyledText variant="h1" style={styles.title}>
        {t('common.welcome')}
      </StyledText>
      <SignInForm
        onSubmit={signIn}
        {...{
          onForgotPasswordPress,
          disabled: isPending,
          errorMessage: error?.message,
        }}
      />
      <StyledButton
        left={<GoogleIcon />}
        color="secondary"
        testID={SignInFormContainerTestId.signInWithGoogle}>
        {t('signin.signin-with-google')}
      </StyledButton>
      <View style={styles.signUpWrapper}>
        <StyledText variant="body2" style={styles.textSignUp}>
          {t('signin.new-user')}
        </StyledText>
        <StyledButton
          variant="text"
          textProps={{ variant: 'body2', semiBold: true, underline: true }}
          onPress={onSignUpPress}
          testID={SignInFormContainerTestId.signUp}>
          {t('common.signup')}
        </StyledButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: dimensions.spacing.sm,
  },
  title: {
    marginTop: dimensions.spacing.xxl,
    marginBottom: dimensions.spacing.lg,
  },
  signUpWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textSignUp: {
    alignSelf: 'center',
  },
});

export const SignInFormContainerTestId = {
  signInWithGoogle: 'SignInFormContainer_signInWithGoogle',
  signUp: 'SignInFormContainer_signUp',
};

export default SignInFormContainer;
