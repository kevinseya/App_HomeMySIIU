import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  darkBackground: {
    backgroundColor: '#0A0A0A', // Fondo oscuro
  },
  lightBackground: {
    backgroundColor: '#FFFFFF', // Fondo claro
  },
});
