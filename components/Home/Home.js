import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './Home.styles';
import SocialCards from './components/SocialCards/SocialCards';
import IconBoxes from './components/IconBoxes/IconBoxes';
import NotificationCard from './components/NotificationCard/NotificationCard';
import VirtualAdvisor from '../VirtualAdvisor/VirtualAdvisor';

const Home = ({ socialCards, isDarkMode }) => {
  return (
    <ImageBackground 
      source={require('../../assets/background.png')} 
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.overlay}></View>
      <View style={styles.body}>
        <View style={styles.content}>
          <Text style={styles.text}>Últimas noticias en la UCE..</Text>
          <SocialCards socialCards={socialCards} isDarkMode={isDarkMode} />
          <IconBoxes isDarkMode={isDarkMode} />
          <NotificationCard />
          <VirtualAdvisor />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
