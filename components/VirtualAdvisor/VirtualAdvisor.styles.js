import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); 

const bottomPosition = height < 668 ? height * -0.30 : height * -0.40; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: bottomPosition,
    left: 0,
    right: 0,
  },
  tigerContainer: {
    position: 'absolute',
    bottom: 10,
    width: 100, 
    height: 100, 
  },
  tiger: {
    width: '110%',
    height: '110%',
    resizeMode: 'contain',
  },
});

export default styles;
