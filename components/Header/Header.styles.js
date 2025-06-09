import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#064771',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    position: 'relative',
  },
  iconLeft: {
    position: 'absolute',
    left: 15,
    zIndex: 2,
  },
  iconRight: {
    position: 'absolute',
    right: 15,
    zIndex: 2,
  },
  logoContainer: {
    position: 'absolute',
    top: 45, 
    left: '50%', 
    marginLeft: -35,
    zIndex: 3, 
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
