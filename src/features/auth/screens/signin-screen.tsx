import { AuthScreenNames, AuthScreenProps } from '@/types/auth-navigator.types';
import { Button, Text, View } from 'react-native';

const SignInScreen = ({ navigation }: AuthScreenProps) => {
  const navigateToSignUp = () => navigation?.navigate(AuthScreenNames.signUp);
  return (
    <View style={{ width: '100%', flex: 1 }}>
      <Text>Sign In Screen</Text>
      <Button title="Sign Up" onPress={navigateToSignUp} />
    </View>
  );
};

export default SignInScreen;
