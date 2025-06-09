import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#064771',
    height: 90,
  },
  logoContainer: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 2,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  circleContainer: {
    position: 'absolute',
    bottom: 30, 
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 2, 
  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 50, 
    backgroundColor: '#808183', 
    borderWidth: 7,
    borderColor: 'white', 
    justifyContent: 'center',
    alignItems: 'center',
  },
});