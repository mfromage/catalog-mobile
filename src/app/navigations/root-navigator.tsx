import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './auth-navigator';
import UserNavigator from './user-navigator';
import useAuthStore from '@/stores/auth-store';

type RootStackParamList = {
  auth: undefined;
  main: undefined;
};

// Create the root stack navigator
const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { user } = useAuthStore();
  const isAuthenticated = user !== undefined;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="main" component={UserNavigator} />
        ) : (
          <Stack.Screen name="auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const RootNavigatorTestId = 'root-navigator';

export default RootNavigator;
