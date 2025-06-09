import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './SocialCards.styles';

const SocialCards = ({ socialCards }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.cardsContainer}
    >
      {socialCards.map((card) => (
        <View key={card.id} style={styles.card_social_network}>
          <View style={styles.cardImageContainer}>
            <Image source={require('../../../../assets/logo.png')} style={styles.largeLogo} />
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>{card.title || "Sin título"}</Text>
              <Text style={styles.cardUser}>{card.user || "@SinUsuario"}</Text>
            </View>
          </View>
          <Text style={styles.cardContent} numberOfLines={3} ellipsizeMode='tail'>
            {card.content || "Contenido no disponible"}
          </Text>

          <View style={styles.xLogoContainer}>
            <Image
              source={require('../../../../assets/logo_x.png')}  
              style={styles.xLogo}
            />
          </View>

          <Text style={styles.cardDate}>{card.date || "Fecha no disponible"}</Text>

          <View style={styles.iconContainer}>
            <FontAwesome name="comment" size={8} color="#064771" />
            <FontAwesome name="retweet" size={8} color="#064771" />
            <FontAwesome name="heart" size={8} color="#064771" />
            <FontAwesome name="share-alt" size={8} color="#064771" />
          </View>               
        </View>
      ))}
    </ScrollView>
  );
};

export default SocialCards;