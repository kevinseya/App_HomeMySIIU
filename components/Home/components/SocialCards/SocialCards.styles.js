import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card_social_network: {
    backgroundColor: 'rgba(128, 129, 131, 0.15)', 
    width: width * 0.9,
    height: height*0.21, 
    borderRadius: 20,
    padding: 15, 
    marginRight: 15, 
    position: 'relative',
  },
  cardImageContainer: {
    flexDirection: 'row',  
    alignItems: 'center',
    marginBottom: 5,
  },
  largeLogo: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10, 
  },
  textContainer: {
    flex: 1, 
  },
  cardTitle: {
    color: '#064771',
    fontFamily: 'Montserrat-Bold',
    fontSize: 8, 
    marginBottom: 1, 
  },
  cardUser: {
    color: '#064771',
    fontFamily: 'Montserrat-Light',
    fontSize: 8, 
    marginBottom: -1,
  },
  cardContent: {
    color: '#064771',
    fontFamily: 'Montserrat-Light',
    fontSize: 14,
    textAlign: 'justify',
  },
  cardDate: {
    color: '#064771',
    fontFamily: 'Montserrat-Regular',
    fontSize: 6,
    textAlign: 'left',
    marginTop: 5,
  },
  xLogoContainer: {
    position: 'absolute',  
    top: 15,  
    right: 20, 
  },
  xLogo: {
    width: 15,  
    height: 15,
    resizeMode: 'contain',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
});