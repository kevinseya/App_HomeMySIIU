import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './IconBoxes.styles';

const IconBoxes = ({ isDarkMode }) => {
  // Establecer el color de los textos e íconos dependiendo del modo oscuro
  const textColor = isDarkMode ? '#FFFFFF' : '#064771';
  const iconColor = isDarkMode ? '#FFFFFF' : '#064771';
  const borderColor = isDarkMode ? '#FFFFFF' : '#064771'; // Cambiar el color del borde

  return (
    <View style={styles.container_boxes}>
      <View style={styles.iconContainer_boxes}>
        <View style={[styles.iconBox, { borderColor: borderColor }]}>
          <FontAwesome name="users" size={50} color={iconColor} />
          <Text style={[styles.iconText, { color: textColor }]}>ESTUDIANTES</Text>
        </View>

        <View style={[styles.iconBox, { borderColor: borderColor }]}>
          <FontAwesome name="comments" size={50} color={iconColor} />
          <Text style={[styles.iconText, { color: textColor }]}>FORO</Text>
        </View>

        <View style={[styles.iconBox, { borderColor: borderColor }]}>
          <FontAwesome name="car" size={50} color={iconColor} />
          <Text style={[styles.iconText, { color: textColor }]}>PARQUEADERO</Text>
        </View>
      </View>
    </View>
  );
};

export default IconBoxes;
