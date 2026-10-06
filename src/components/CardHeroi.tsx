import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HeroCard({ nome, classe }: any) {
  return (
    <View style={styles.card}>
      <Image
        source={require('../../assets/images/meow.jpg')}
        style={styles.avatar}
      />

      <View>
        <Text style={styles.nome}>
          {nome}
        </Text>

        <Text style={styles.classe}>
          {classe}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#c7d8bc',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#6B7D45',
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },

  nome: {
    color: '#405238',
    fontSize: 17,
    fontWeight: 'bold',
  },

  classe: {
    color: '#75654B',
    fontSize: 13,
    marginTop: 3,
  },
});