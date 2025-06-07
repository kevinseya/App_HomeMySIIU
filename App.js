import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar, Text, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';  // Importación correcta de expo-font

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

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
      {/* Círculo divisor*/}
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
        </View>
      </View>

      {/* Cuerpo de la pantalla con contenido */}
      <View style={styles.body}>
        <View style={styles.content}>
          <Text style={styles.text}>Últimas noticias en la UCE..</Text>
          <View style={styles.card_social_network}>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
       
      </View>
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
  card_social_network:{
    backgroundColor: 'rgba(128, 129, 131, 0.35)',
    opacity: 0.35,
    width: 350,
    height: 130,
    borderRadius: 20, 
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
});