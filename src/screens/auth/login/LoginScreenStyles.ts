// LoginScreenStyles.js
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    padding: 4,
  },
  input: {
    fontSize: 18,
    padding: 10,
    borderWidth: 0,
    borderColor: 'gray', // Assuming gray as a default color, replace with actual color from theme
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#F5F5F5',
  },
  button: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: '#007bff',
    color: 'white',
    padding: 10,
    borderRadius: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -15, // Adjust based on your design
  },
});
