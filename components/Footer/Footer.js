import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './Footer.styles';

const Footer = () => {
  return (
    <View style={styles.footer}>
      {/* Íconos en la parte inferior */}
      <View style={styles.iconRow}>
        {/* Íconos a la izquierda */}
        <TouchableOpacity style={styles.iconLeft}>
          <FontAwesome name="id-card" size={30} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconLeft}>
          <FontAwesome name="file-text" size={30} color="#FFF" />
        </TouchableOpacity>
        
        {/* Círculo con ícono en el centro */}
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <FontAwesome name="home" size={30} color="#FFF" />
          </View>
        </View>

        {/* Íconos a la derecha */}
        <TouchableOpacity style={styles.iconRight}>
          <FontAwesome name="map-marker" size={30} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconRight}>
          <FontAwesome name="bars" size={30} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
