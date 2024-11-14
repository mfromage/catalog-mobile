import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppProviders from './app-providers';

export default function App() {
  return (
    <AppProviders>
      <SafeAreaView>
        <Text>Open up App.tsx to start working on your app!</Text>
      </SafeAreaView>
      <StatusBar style="auto" />
    </AppProviders>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
