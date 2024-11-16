import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '@/features/auth/screens/signin-screen';
import SignUpScreen from '@/features/auth/screens/signup-screen';
import {
  AuthScreenNames,
  AuthStackParamList,
} from '@/types/auth-navigator.types';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={AuthScreenNames.signIn}
        component={SignInScreen}
      />
      <AuthStack.Screen
        name={AuthScreenNames.signUp}
        component={SignUpScreen}
      />
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
