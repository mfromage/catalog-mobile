import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet } from 'react-native';
import { SignInFormSchema, SignInRequest } from '../types/auth.types';
import { StyledButton } from '@/components/button/styled-button';
import StyledText from '@/components/styled-text';
import StyledTextInput from '@/components/styled-text-input';

type SignInFormProps = {
  onSubmit: (data: SignInRequest) => void;
  onForgotPasswordPress: () => void;
  errorMessage?: string;
  disabled?: boolean;
};

const SignInForm = ({
  onSubmit,
  onForgotPasswordPress,
  errorMessage,
  disabled = false,
}: SignInFormProps) => {
  const { t } = useTranslation();
  const resolver = zodResolver(SignInFormSchema);
  const methods = useForm<SignInRequest>({
    resolver,
  });

  return (
    <FormProvider {...methods}>
      <StyledTextInput
        name="email"
        label={t('form.email-address')}
        placeholder={t('form.email-address')}
        autoCapitalize="none"
        keyboardType="email-address"
        disabled={disabled}
        testID={SignInFormTestId.email}
      />
      <StyledTextInput
        name="password"
        label={t('form.password')}
        placeholder={t('form.password')}
        secureTextEntry
        disabled={disabled}
        testID={SignInFormTestId.password}
      />
      <View style={styles.forgetPassword}>
        <StyledButton
          variant="text"
          textProps={{ variant: 'body3', semiBold: true }}
          disabled={disabled}
          testID={SignInFormTestId.forgotPassword}
          onPress={onForgotPasswordPress}>
          {t('signin.forgot-password')}
        </StyledButton>
      </View>

      {errorMessage && (
        <StyledText
          alignment="center"
          color="danger"
          testID={SignInFormTestId.errorMessage}>
          {errorMessage}
        </StyledText>
      )}
      <StyledButton
        disabled={disabled}
        testID={SignInFormTestId.signIn}
        onPress={methods.handleSubmit(onSubmit)}>
        {t('common.signin')}
      </StyledButton>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  forgetPassword: {
    alignSelf: 'flex-end',
  },
  textRegister: {
    alignSelf: 'center',
  },
});

export const SignInFormTestId = {
  email: 'SignInForm_Email',
  password: 'SignInForm_Password',
  forgotPassword: 'SignInForm_ForgotPassword',
  signIn: 'SignInForm_SignIn',
  errorMessage: 'SignInForm_ErrorMessage',
};

export default SignInForm;
