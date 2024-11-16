import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native'; // Import the render and fireEvent methods
import AuthNavigator from '../auth-navigator';

describe('AuthNavigator', () => {
  it('should navigate from SignIn to SignUp', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>,
    );

    // Initially, we should see the SignInScreen
    expect(getByText('Sign In Screen')).toBeTruthy(); // Assuming "Sign In" is a text on SignInScreen

    // Simulate a navigation action (button press or link click) that navigates to SignUp screen
    const navigateButton = getByText('Sign Up'); // Assuming this button exists in SignInScreen
    fireEvent.press(navigateButton);

    // After pressing the button, we should be on the SignUpScreen
    expect(getByText('Sign Up Screen')).toBeTruthy(); // Assuming "Sign Up" is a text on SignUpScreen
  });
});
