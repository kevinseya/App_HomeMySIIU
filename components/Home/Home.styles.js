import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imageBackground: {
    flex: 1,  
    justifyContent: 'center', 
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,  
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
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
});