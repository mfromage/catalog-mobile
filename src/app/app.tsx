import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppProviders from './app-providers';
import '@/libs/i18n';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();
  return (
    <AppProviders>
      <SafeAreaView>
        <Text>{t('welcome')}</Text>
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
