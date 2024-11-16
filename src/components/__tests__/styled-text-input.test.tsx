import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { View } from 'react-native';
import StyledTextInput from '../styled-text-input';
import { fireEvent, render } from '@/testing/test-util';

const setup = (props = {}) => {
  const Component = () => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <StyledTextInput name="email" {...props} />
      </FormProvider>
    );
  };
  return render(<Component />);
};
describe('StyledTextInput', () => {
  it('renders correctly with default props', () => {
    const { getByPlaceholderText } = setup({ placeholder: 'Enter text' });
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('displays the label when provided', () => {
    const { getByText } = setup({ label: 'Test Label' });
    expect(getByText('Test Label')).toBeTruthy();
  });

  it('displays the left component when provided', () => {
    const LeftComponent = () => <View testID="leftComponent" />;
    const { getByTestId } = setup({ left: <LeftComponent /> });
    expect(getByTestId('leftComponent')).toBeTruthy();
  });

  it('calls onChangeText when text is changed', () => {
    const { getByPlaceholderText } = setup({ placeholder: 'Enter text' });
    const input = getByPlaceholderText('Enter text');
    fireEvent.changeText(input, 'new text');
    expect(input.props.value).toBe('new text');
  });
});
