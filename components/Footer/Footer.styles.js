import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  footer: {
    backgroundColor: '#808183', 
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
