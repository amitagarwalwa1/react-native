import {useColorScheme} from 'react-native';
import {LightTheme, DarkTheme} from './theme';

export const useAppTheme = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return isDarkMode ? DarkTheme : LightTheme;
};
