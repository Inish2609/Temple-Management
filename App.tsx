/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import LoginScreen from './src/src/screens/LoginScreen';
import HomeScreen from './src/src/screens/HomeScreen';
import CommitteeMemberScreen from './src/src/screens/CommitteeMemberScreen';
import PoojaRegistrationScreen from './src/src/screens/PoojaRegistrationScreen';
import FestivalDashboardScreen from './src/src/screens/FestivalDashboardScreen';
import StartScreen from './src/src/screens/StartScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <AppContent /> */}
      {/* <StartScreen /> */}
      {/* <LoginScreen /> */}
      {/* <HomeScreen /> */}
      {/* <CommitteeMemberScreen /> */}
      {/* <PoojaRegistrationScreen /> */}
      <FestivalDashboardScreen />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
