import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  card_notifications: {
    backgroundColor: 'rgba(128, 129, 131, 0.30)',  
    width: width * 0.9,
    height: height * 0.18,
    borderRadius: 20,  
    padding: 10,  
    position: 'absolute',
    bottom: height * -0.25,  
    left: 17,  
    flexDirection: 'row',  
    alignItems: 'flex-start',  
    justifyContent: 'space-between',  
  },
  calendarIcon: {
    width: width * 0.25,
    height: width * 0.25,
    resizeMode: 'contain',
    marginTop: 9,
    marginRight: 0,  
  },
  notificationDetails: {
    flex: 1,  
    justifyContent: 'space-between',  
  },
  dateText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 10,  
    color: '#AD9219',  
    marginBottom: -1,  
  },
  cardSmall: {
    backgroundColor: '#FFFFFF',  
    padding: -2,  
    marginTop: 4,  
    borderRadius: 10,  
    width: width*0.6,  
    justifyContent: 'center',  
    alignItems: 'center',  
  },
  cardText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 6,  
    color: '#064771',  
    marginBottom: 5,  
  },
  cardTime: {
    fontFamily: 'Montserrat-Light',
    fontSize: 10,  
    color: '#064771',  
  },
});