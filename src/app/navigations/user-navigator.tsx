import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/features/home/screens/home-screen';

const Stack = createStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default UserNavigator;
