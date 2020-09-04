import React from 'react';
import { View, Text } from 'react-native';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles';

export default function Main() {
  return (
    <View style={styles.container}>
      <Header />

      <Menu />

      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.title}>Saldo dispoível</Text>
            <Text style={styles.description}>R$ 56,90</Text>
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.annotation}>Tranferência de R$40,00 recebida de Cinglair Augusto Capello hoje às 10:23h</Text>
          </View>
        </View>
      </View>
      <Tabs />
    </View>
  );
}

