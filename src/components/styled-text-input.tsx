import { ReactNode } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import StyledText from './styled-text';
import { useColorPalette } from '@/providers/color-palette-provider';
import { dimensions } from '@/themes';

interface StyledTextInputProps extends TextInputProps, UseControllerProps {
  label?: string;
  defaultValue?: string;
  left?: ReactNode;
}

const StyledTextInput = ({
  left,
  name,
  label,
  control,
  defaultValue,
  ...rest
}: StyledTextInputProps) => {
  const {
    field,
    formState: { errors },
  } = useController({ control, name, defaultValue });
  const { palette } = useColorPalette();
  const colorStyles = StyleSheet.create({
    wrapper: {
      backgroundColor: palette.input.background,
    },
  });
  return (
    <View>
      {label && <StyledText variant="body1">{label}</StyledText>}
      <View style={[styles.inputWrapper, colorStyles.wrapper]}>
        {left}
        <TextInput
          {...rest}
          placeholderTextColor={palette.input.placeholder}
          value={field.value}
          onChangeText={field.onChange}
        />
      </View>
      {errors[name] && typeof errors[name]?.message === 'string' && (
        <StyledText variant="body2" color="danger" style={styles.error}>
          {errors[name].message}
        </StyledText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    gap: dimensions.spacing.xs,
    marginTop: dimensions.spacing.sm,
    padding: dimensions.spacing.md,
    borderRadius: dimensions.borderRadius.md,
  },

  error: {
    marginTop: dimensions.spacing.xs,
  },
});

export default StyledTextInput;
