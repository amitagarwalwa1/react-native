import * as React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/screens/auth/login/LoginScreen';
import {DarkTheme, LightTheme} from './src/theme/theme';

function App() {
  const Stack = createNativeStackNavigator();
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : LightTheme;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
