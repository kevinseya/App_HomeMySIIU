import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './NotificationCard.styles';

const NotificationCard = () => {
  return (
    <View style={styles.card_notifications}>
      <FontAwesome name="calendar" size={80} color="#AD9219" style={styles.calendarIcon} />
      <View style={styles.notificationDetails}>
        <Text style={styles.dateText}>Martes, 6 de Mayo del 2025</Text>
        <View style={styles.cardSmall}>
          <Text style={styles.cardText}>Materia: Gestión de Procesos</Text>
          <Text style={styles.cardTime}>Horario: 07h00 - 09h00</Text>
        </View>
        <View style={styles.cardSmall}>
          <Text style={styles.cardText}>Materia: Dispositivos móviles</Text>
          <Text style={styles.cardTime}>Horario: 18h00 - 20h00</Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;