import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 25,
    justifyContent: 'flex-start',
  },
  content: {
    padding: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#AD9219',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  imageBackground: {
    flex: 1,  
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,  
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});
