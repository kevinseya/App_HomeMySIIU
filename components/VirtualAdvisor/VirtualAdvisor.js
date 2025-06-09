import React, { useState } from 'react';
import { View, Image, PanResponder } from 'react-native';
import styles from './VirtualAdvisor.styles'; 

const VirtualAdvisor = () => {
  const [position, setPosition] = useState({ x: 265, y: 0 });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      let newX = gestureState.moveX;

      // Limitar el movimiento solo en el eje X
      if (newX < 0) newX = 0;  
      if (newX > 300) newX = 260; 

      setPosition({ x: newX, y: 0 }); 
    },
    onPanResponderRelease: () => {},
  });

  return (
    <View style={styles.container}>
      <View
        style={[styles.tigerContainer, { left: position.x}]}  
        {...panResponder.panHandlers}  
      >
        <Image
          source={require('../../assets/tiger.png')}
          style={styles.tiger}
        />
      </View>
    </View>
  );
};

export default VirtualAdvisor;
