import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './IconBoxes.styles';

const IconBoxes = () => {
  return (
    <View style={styles.container_boxes}>
      <View style={styles.iconContainer_boxes}>
        <View style={styles.iconBox}>
          <FontAwesome name="users" size={50} color="#064771" />
          <Text style={styles.iconText}>ESTUDIANTES</Text>
        </View>

        <View style={styles.iconBox}>
          <FontAwesome name="comments" size={50} color="#064771" />
          <Text style={styles.iconText}>FORO</Text>
        </View>

        <View style={styles.iconBox}>
          <FontAwesome name="car" size={50} color="#064771" />
          <Text style={styles.iconText}>PARQUEADERO</Text>
        </View>
      </View>
    </View>
  );
};

export default IconBoxes;