import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './SocialCards.styles';

const SocialCards = ({ socialCards, isDarkMode }) => {
  // Establecer el color de los textos e íconos dependiendo del modo oscuro
  const textColor = isDarkMode ? '#FFFFFF' : '#064771';
  const iconColor = isDarkMode ? '#FFFFFF' : '#064771';

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
              <Text style={[styles.cardTitle, { color: textColor }]}>{card.title || "Sin título"}</Text>
              <Text style={[styles.cardUser, { color: textColor }]}>{card.user || "@SinUsuario"}</Text>
            </View>
          </View>
          <Text style={[styles.cardContent, { color: textColor }]} numberOfLines={3} ellipsizeMode='tail'>
            {card.content || "Contenido no disponible"}
          </Text>

          <View style={styles.xLogoContainer}>
            <Image
              source={require('../../../../assets/logo_x.png')}  
              style={styles.xLogo}
            />
          </View>

          <Text style={[styles.cardDate, { color: textColor }]}>{card.date || "Fecha no disponible"}</Text>

          <View style={styles.iconContainer}>
            <FontAwesome name="comment" size={8} color={iconColor} />
            <FontAwesome name="retweet" size={8} color={iconColor} />
            <FontAwesome name="heart" size={8} color={iconColor} />
            <FontAwesome name="share-alt" size={8} color={iconColor} />
          </View>               
        </View>
      ))}
    </ScrollView>
  );
};

export default SocialCards;
