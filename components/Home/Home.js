import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './Home.styles';
import SocialCards from './components/SocialCards/SocialCards';
import IconBoxes from './components/IconBoxes/IconBoxes';
import NotificationCard from './components/NotificationCard/NotificationCard';
import VirtualAdvisor from '../VirtualAdvisor/VirtualAdvisor';

const Home = ({ socialCards }) => {
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
          
          <SocialCards socialCards={socialCards} />
          
          <IconBoxes />
          
          <NotificationCard />

           <VirtualAdvisor />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;