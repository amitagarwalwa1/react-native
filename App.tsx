import * as React from 'react';
import {Platform, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/screens/auth/login/LoginScreen';
import {DarkTheme, LightTheme} from './src/theme/theme';
import Dashboard from './src/screens/home/dashboard/Dashboard';

function App() {
  const Stack = createNativeStackNavigator();
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : LightTheme;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
