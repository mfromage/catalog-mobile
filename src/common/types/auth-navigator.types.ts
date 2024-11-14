import { NavigationProp } from '@react-navigation/native';

export enum AuthScreenNames {
  signIn = 'signIn',
  signUp = 'signUp',
  forgotPassword = 'forgotPassword',
}
export type AuthStackParamList = {
  [AuthScreenNames.signIn]: undefined;
  [AuthScreenNames.signUp]: undefined;
  [AuthScreenNames.forgotPassword]: undefined;
};

export type AuthStackNavigation = NavigationProp<AuthStackParamList>;

export type AuthScreenProps = {
  navigation?: AuthStackNavigation;
};
