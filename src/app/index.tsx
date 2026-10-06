import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomModal from '../components/ModalAparencia';
import HeroCard from '../components/CardHeroi';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [herois, setHerois] = useState<any[]>([]);

  function adicionarHeroi(hero: any) {
    setHerois([...herois, hero]);
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>
          Guilda de Aventureiros
        </Text>

        <Text style={styles.subtitulo}>
          Cadastre seus heróis e forme sua equipe
        </Text>
      </View>

      <View style={styles.linha} />

      <Text style={styles.tituloLista}>
        Meus Heróis
      </Text>

      {herois.length === 0 ? (
        <View style={styles.vazio}>
          <Text style={styles.vazioTitulo}>
            A guilda está vazia
          </Text>

          <Text style={styles.vazioTexto}>
            Cadastre seu primeiro herói para começar.
          </Text>
        </View>
      ) : (
        <View>
          {herois.map((heroi, index) => (
            <HeroCard
              key={index}
              nome={heroi.nome}
              classe={heroi.classe}
            />
          ))}
        </View>
      )}

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.botaoTexto}>
          Cadastrar Herói
        </Text>
      </TouchableOpacity>

      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={adicionarHeroi}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1E8D5',
    padding: 20,
    paddingTop: 55,
  },

  header: {
    alignItems: 'center',
    marginBottom: 20,
  },

  titulo: {
    color: '#405238',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitulo: {
    color: '#4b7551',
    fontSize: 14,
    marginTop: 7,
    textAlign: 'center',
  },

  linha: {
    height: 2,
    backgroundColor: '#688b43',
    marginBottom: 22,
  },

  tituloLista: {
    color: '#405238',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  vazio: {
    backgroundColor: '#DDD5BD',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
  },

  vazioTitulo: {
    color: '#4a5238',
    fontSize: 18,
    fontWeight: 'bold',
  },

  vazioTexto: {
    color: '#50754b',
    fontSize: 13,
    marginTop: 8,
    textAlign: 'center',
  },

  botao: {
    backgroundColor: '#6B7D45',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 15,
  },

  botaoTexto: {
    color: '#FFF8E7',
    fontSize: 16,
    fontWeight: 'bold',
  },
});