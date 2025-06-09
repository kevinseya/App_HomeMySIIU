import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';
import * as Font from 'expo-font';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import styles from './App.styles'; // Importando los estilos

const socialCards = [
  { id: 1, title: "Universidad Central del Ecuador", user: "@Lacentralec", content: "El rector de @lacentralec, Dr. Patricio @EspinosaRector junto a autoridades de la Facultad @FCMedicas_UCE y de la Dirección de Bienestar", date: "11:35 AM May 5, 2025" },
  { id: 2, title: "Universidad Central del Ecuador", user: "@Lacentralec", content: "El rector de @lacentralec, Dr. Patricio @EspinosaRector junto a autoridades de la Facultad @FCMedicas_UCE y de la Dirección de Bienestar", date: "11:35 AM May 5, 2025" },
  { id: 3, title: "Universidad Central del Ecuador", user: "@Lacentralec", content: "El rector de @lacentralec, Dr. Patricio @EspinosaRector junto a autoridades de la Facultad @FCMedicas_UCE y de la Dirección de Bienestar", date: "11:35 AM May 5, 2025" },
  { id: 4, title: "Universidad Central del Ecuador", user: "@Lacentralec", content: "El rector de @lacentralec, Dr. Patricio @EspinosaRector junto a autoridades de la Facultad @FCMedicas_UCE y de la Dirección de Bienestar", date: "11:35 AM May 5, 2025" },
  { id: 5, title: "Universidad Central del Ecuador", user: "@Lacentralec", content: "El rector de @lacentralec, Dr. Patricio @EspinosaRector junto a autoridades de la Facultad @FCMedicas_UCE y de la Dirección de Bienestar", date: "11:35 AM May 5, 2025" }
];

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); 

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

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#064771" />
      </View>
    );
  }

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState);
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Home socialCards={socialCards} isDarkMode={isDarkMode} />
      <Footer />
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
    </View>
  );
}
