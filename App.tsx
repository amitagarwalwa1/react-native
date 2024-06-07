import * as React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/screens/auth/login/LoginScreen';
import {DarkTheme, LightTheme} from './src/theme/theme';
import Dashboard from './src/screens/home/dashboard/Dashboard';
import FeedScreen from './src/screens/home/feeds/FeedScreen';

function App() {
  const Stack = createNativeStackNavigator();
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : LightTheme;

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="Login">
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
          <Stack.Screen
            name="Feeds"
            component={FeedScreen}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
