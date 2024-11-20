import { useTranslation } from 'react-i18next';
import { View, StyleSheet } from 'react-native';
import SignUpForm from './signup-form';
import useSignUp from '../hooks/use-signup';
import { StyledButton } from '@/components/button/styled-button';
import StyledText from '@/components/styled-text';
import GoogleIcon from '@/components/svg/google-icon';
import { dimensions } from '@/themes';

type SignUpFormContainerProps = {
  onSignInPress: () => void;
};
const SignUpFormContainer = ({ onSignInPress }: SignUpFormContainerProps) => {
  const { t } = useTranslation();
  const { mutate: signUp, error, isPending } = useSignUp();
  return (
    <View style={styles.container}>
      <StyledText variant="h1" style={styles.title}>
        {t('common.welcome')}
      </StyledText>
      <SignUpForm onSubmit={signUp} disabled={isPending} errorMessage={error?.message} />
      <StyledButton
        left={<GoogleIcon />}
        color="secondary"
        testID={SignUpFormContainerTestId.SignUpWithGoogle}>
        {t('signup.signup-with-google')}
      </StyledButton>
      <View style={styles.signUpWrapper}>
        <StyledText variant="body2" style={styles.textSignUp}>
          {t('signup.already-have-account')}
        </StyledText>
        <StyledButton
          variant="text"
          textProps={{ variant: 'body2', semiBold: true, underline: true }}
          onPress={onSignInPress}
          testID={SignUpFormContainerTestId.signIn}>
          {t('common.signin')}
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
    marginVertical: dimensions.spacing.lg,
  },
  signUpWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textSignUp: {
    alignSelf: 'center',
  },
});

export const SignUpFormContainerTestId = {
  SignUpWithGoogle: 'SignUpFormContainer_SignUpWithGoogle',
  signUp: 'SignUpFormContainer_signUp',
  signIn: 'SignUpFormContainer_signIn',
};

export default SignUpFormContainer;
