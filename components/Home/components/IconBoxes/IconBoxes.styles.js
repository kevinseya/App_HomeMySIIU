import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container_boxes: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',      
    paddingTop: 70,
  },
  iconContainer_boxes: {
    flexDirection: 'row',    
    justifyContent: 'space-evenly', 
    alignItems: 'center',    
    width: '100%',   
    left: -2,         
  },
  iconBox: {
    alignItems: 'center',    
    borderColor: '#064771',   
    borderWidth: 1.5,          
    width: 100,              
    height: 115,             
    borderRadius: 10,        
    padding: 10,             
    justifyContent: 'center', 
  },
  iconText: {
    color: '#064771',        
    fontFamily: 'Montserrat-Bold',
    fontSize: 7.6,            
    marginTop: 5,            
    textAlign: 'center',     
  },
});