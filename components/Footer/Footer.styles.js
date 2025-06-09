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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  iconLeft: {
    marginRight: 20, // Espaciado entre los íconos de la izquierda
  },
  iconRight: {
    marginLeft: 20, // Espaciado entre los íconos de la derecha
  },
  circleContainer: {
    position: 'absolute',
    bottom: 30,
    left: '50%',
    transform: [{ translateX: -45 }], // Para centrar el círculo
    alignItems: 'center',
    zIndex: 2,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#808183',
    borderWidth: 7,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
