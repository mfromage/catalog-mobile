import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import SignUpForm from './signup-form';
import { StyledButton } from '@/components/button/styled-button';
import { dimensions } from '@/themes';
import StyledText from '@/components/styled-text';
import { SignUpRequest } from '../types/auth.types';

type SignUpFormContainerProps = {
  onSignInPress: () => void;
};
const SignUpFormContainer = ({ onSignInPress }: SignUpFormContainerProps) => {
  const { t } = useTranslation();
  const handleSubmit = (data: SignUpRequest) => {
    //todo: implement SignUp
  };
  return (
    <View style={styles.container}>
      <StyledText variant="h1" style={styles.title}>
        {t('common.welcome')}
      </StyledText>
      <SignUpForm onSubmit={handleSubmit} />
      <StyledButton
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
