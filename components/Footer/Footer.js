import React from 'react';
import { View } from 'react-native';
import styles from './Footer.styles';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.circleContainer}>
        <View style={styles.circle}></View>
      </View>
    </View>
  );
};

export default Footer;
