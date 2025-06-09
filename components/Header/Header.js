import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './Header.styles';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <View style={styles.header}>
      {/* Icono de luna para cambiar el modo */}
      <TouchableOpacity onPress={toggleDarkMode}>
        <FontAwesome
          name={isDarkMode ? 'sun-o' : 'moon-o'} // Cambia el ícono según el modo
          size={30}
          color="#FFF"
          style={styles.iconLeft}
        />
      </TouchableOpacity>

      {/* Aquí iría el logo o cualquier otro componente central */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
      </View>

      {/* Icono de notificaciones */}
      <TouchableOpacity>
        <FontAwesome
          name="bell-o"
          size={30}
          color="#FFF"
          style={styles.iconRight}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
