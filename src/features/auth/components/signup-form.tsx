import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpFormSchema, SignUpRequest } from '../types/auth.types';
import StyledTextInput from '@/components/styled-text-input';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '@/components/button/styled-button';
import StyledText from '@/components/styled-text';

type SignUpFormProps = {
  onSubmit: (data: SignUpRequest) => void;
  errorMessage?: string;
  disabled?: boolean;
};

const SignUpForm = ({
  onSubmit,
  errorMessage,
  disabled = false,
}: SignUpFormProps) => {
  const { t } = useTranslation();
  const resolver = zodResolver(SignUpFormSchema);
  const methods = useForm<SignUpRequest>({
    resolver,
  });

  return (
    <FormProvider {...methods}>
      <StyledTextInput
        name="name"
        label={t('form.name')}
        placeholder={t('form.name')}
        disabled={disabled}
        testID={SignUpFormTestId.name}
      />
      <StyledTextInput
        name="email"
        label={t('form.email-address')}
        placeholder={t('form.email-address')}
        autoCapitalize="none"
        keyboardType="email-address"
        disabled={disabled}
        testID={SignUpFormTestId.email}
      />
      <StyledTextInput
        name="password"
        label={t('form.password')}
        placeholder={t('form.password')}
        secureTextEntry
        disabled={disabled}
        testID={SignUpFormTestId.password}
      />
      <StyledTextInput
        name="passwordConfirmation"
        label={t('form.password-confirm')}
        placeholder={t('form.password-confirm')}
        secureTextEntry
        disabled={disabled}
        testID={SignUpFormTestId.passwordConfirmation}
      />
      {errorMessage && (
        <StyledText
          alignment="center"
          color="danger"
          testID={SignUpFormTestId.errorMessage}>
          {errorMessage}
        </StyledText>
      )}
      <StyledButton
        disabled={disabled}
        testID={SignUpFormTestId.signUp}
        onPress={methods.handleSubmit(onSubmit)}>
        {t('common.signup')}
      </StyledButton>
    </FormProvider>
  );
};

export const SignUpFormTestId = {
  name: 'SignUpForm_Name',
  email: 'SignUpForm_Email',
  password: 'SignUpForm_Password',
  passwordConfirmation: 'SignUpForm_passwordConfirmation',
  signUp: 'SignUpForm_SignUp',
  errorMessage: 'SignUpForm_ErrorMessage',
};

export default SignUpForm;
