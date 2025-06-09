import React from 'react';
import { View, Image } from 'react-native';
import styles from './Header.styles';

const Header = () => {
  return (
    <>
      <View style={styles.header} />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
      </View>
    </>
  );
};

export default Header;