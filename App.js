import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import CustomTheme from './src/theme/CustomTheme';
import AppNavigator from './src/navigation/AppNavigator';
function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={CustomTheme}>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;
