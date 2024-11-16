import { Button, Platform, Text, View } from 'react-native';
import { AuthScreenNames, AuthScreenProps } from '@/types/auth-navigator.types';

const SignInScreen = ({ navigation }: AuthScreenProps) => {
  const navigateToSignUp = () => navigation?.navigate(AuthScreenNames.signUp);
  return (
    <View style={{ width: '100%', flex: 1 }}>
      <Text style={{ fontFamily: 'NunitoSans' }}>Sign In Screen</Text>
      <Button title="Sign Up" onPress={navigateToSignUp} />
    </View>
  );
};

export default SignInScreen;
