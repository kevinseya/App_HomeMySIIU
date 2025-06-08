import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar, Text, ActivityIndicator, ScrollView } from 'react-native';
import * as Font from 'expo-font'; 
import { FontAwesome } from '@expo/vector-icons'; 
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const socialCards = [
    { id: 1, title: "Universidad Central del Ecuador", user:"@Lacentralec", content: "El rector de @lacentralec, Dr. Patricio @EspinosaRector junto a autoridades de la Facultad @FCMedicas_UCE y de la Dirección de Bienestar", date: "11:35 AM May 5, 2025" },
    { id: 2, title: "Universidad Central del Ecuador", user:"@Lacentralec", content: "El rector de @lacentralec, Dr. Patricio @EspinosaRector junto a autoridades de la Facultad @FCMedicas_UCE y de la Dirección de Bienestar", date: "11:35 AM May 5, 2025" },
    { id: 3, title: "Universidad Central del Ecuador", user:"@Lacentralec", content: "El rector de @lacentralec, Dr. Patricio @EspinosaRector junto a autoridades de la Facultad @FCMedicas_UCE y de la Dirección de Bienestar", date: "11:35 AM May 5, 2025" },
    { id: 4, title: "Universidad Central del Ecuador", user:"@Lacentralec", content: "El rector de @lacentralec, Dr. Patricio @EspinosaRector junto a autoridades de la Facultad @FCMedicas_UCE y de la Dirección de Bienestar", date: "11:35 AM May 5, 2025" },
    { id: 5, title: "Universidad Central del Ecuador", user:"@Lacentralec", content: "El rector de @lacentralec, Dr. Patricio @EspinosaRector junto a autoridades de la Facultad @FCMedicas_UCE y de la Dirección de Bienestar", date: "11:35 AM May 5, 2025"  }
  ];
  
  // Función para cargar fuentes
  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
          'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
          'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    }

    loadFonts();
  }, []);

  // Muestra un loader mientras cargan las fuentes
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#064771" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Barra superior con color azul */}
      <View style={styles.header} />
      
      {/* Logo posicionado absolutamente */}
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
      </View>

      {/* Círculo divisor */}
      <View style={styles.circleContainer}>
        <View style={styles.circle}></View>
      </View>

      {/* Cuerpo de la pantalla con contenido */}
      <View style={styles.body}>
        <View style={styles.content}>
          <Text style={styles.text}>Últimas noticias en la UCE..</Text>
          {/* Carrusel horizontal de tarjetas */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardsContainer}
          >
            {socialCards.map((card) => (
              <View key={card.id} style={styles.card_social_network}>
                <View style={styles.cardImageContainer}>
                  <Image source={require('./assets/logo.png')} style={styles.largeLogo} />
                  <View style={styles.textContainer}>
                    <Text style={styles.cardTitle}>{card.title}</Text>
                    <Text style={styles.cardUser}>{card.user}</Text>
                  </View>
                </View>
                <Text style={styles.cardContent} numberOfLines={3} ellipsizeMode=''>{card.content}</Text>
                {/* Logo de "X" en el extremo superior derecho */}
                <View style={styles.xLogoContainer}>
                  <Image
                    source={require('./assets/logo_x.png')}  // Asegúrate de tener esta imagen
                    style={styles.xLogo}
                  />
                </View>
                  {/* Fecha y hora bajo el cardContent */}
                <Text style={styles.cardDate}>{card.date}</Text>
                {/* Íconos en la parte inferior */}
                <View style={styles.iconContainer}>
                  <FontAwesome name="comment" size={8} color="#064771" />
                  <FontAwesome name="retweet" size={8} color="#064771" />
                  <FontAwesome name="heart" size={8} color="#064771" />
                  <FontAwesome name="share-alt" size={8} color="#064771" />
                </View>              
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.footer} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#064771',
    height: 80,
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 2,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  content: {
    padding: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#AD9219',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card_social_network: {
    backgroundColor: 'rgba(128, 129, 131, 0.15)', 
    width: 330,
    height: 150,
    borderRadius: 20,
    padding: 15, 
    marginRight: 15, 
  },
  cardImageContainer: {
    flexDirection: 'row',  
    alignItems: 'center',
    marginBottom: 8,
  },
  largeLogo: {
    width: 30,  
    height: 30,
    resizeMode: 'contain',
    marginRight: 1,  
  },
  textContainer: {
    flex: 1,  
  },
  cardTitle: {
    color: '#064771',
    fontFamily: 'Montserrat-Bold',
    fontSize: 7, 
    marginBottom: -1, 
  },
  cardUser: {
    color: '#064771',
    fontFamily: 'Montserrat-Light',
    fontSize: 7, 
    marginBottom: -5,
  },
  cardContent: {
  color: '#064771',
  fontFamily: 'Montserrat-Light',
  fontSize: 16,
  textAlign: 'justify',
  numberOfLines: 3, 
  ellipsizeMode: 'tail', 
  },
  footer: {
    backgroundColor: '#808183', 
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  circleContainer: {
    position: 'absolute',
    bottom: 30, 
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 2, 
  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 50, 
    backgroundColor: '#808183', 
    borderWidth: 7,
    borderColor: 'white', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Nuevo estilo para el logo "X"
  xLogoContainer: {
    position: 'absolute',  
    top: 20,  
    right: 20, 
  },
  xLogo: {
    width: 20,  
    height: 20,
    resizeMode: 'contain',
  },
  cardDate: {
    color: '#064771',
    fontFamily: 'Montserrat-Regular',
    fontSize: 8,
    textAlign: 'left',  // Alinea la fecha a la derecha
    marginTop: 5,  // Espacio entre el contenido y la fecha
  },
   iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,  // Espacio entre el contenido y los íconos
  },
});
