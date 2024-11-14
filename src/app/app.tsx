import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppProviders from './app-providers';
import '@/libs/i18n';
import RootNavigator from './navigations/root-navigator';
import HomeScreen from '@/features/home/screens/home-screen';

export default function App() {
  return (
    <AppProviders>
      <SafeAreaView style={styles.container}>
        <RootNavigator />
      </SafeAreaView>
      <StatusBar style="auto" />
    </AppProviders>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
