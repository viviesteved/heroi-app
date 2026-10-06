import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity,StyleSheet,Alert,} from 'react-native';

export default function ModalAparencia({ visible, onClose, onSave }: any) {
  const [nome, setNome] = useState('');
  const [classe, setClasse] = useState('');

  function salvar() {
    if (nome === '' || classe === '') {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos!'
      );

      return;
    }

    onSave({
      nome: nome,
      classe: classe,
    });

    setNome('');
    setClasse('');
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.fundo}>
        <View style={styles.modal}>
          <Text style={styles.titulo}>
            Novo Herói
          </Text>

          <Text style={styles.label}>
            Nome do Herói
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite o nome"
            placeholderTextColor="#89927B"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>
            Classe
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Guerreiro, Mago..."
            placeholderTextColor="#89927B"
            value={classe}
            onChangeText={setClasse}
          />

          <TouchableOpacity
            style={styles.salvar}
            onPress={salvar}
          >
            <Text style={styles.textoSalvar}>
              Salvar Herói
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancelar}>
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fundo: {
   flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  modal: {
    backgroundColor: '#354733',
    borderRadius: 18,
    padding: 25,
  },

  titulo: {
    color: '#E4E8C9',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  label: {
    color: '#D5DDB5',
    fontWeight: 'bold',
    marginBottom: 5,
  },

  input: {
    backgroundColor: '#b7c89e',
    color: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },

  salvar: {
    backgroundColor: '#628b43',     
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoSalvar: {
    color: '#FFF8E7',
    fontWeight: 'bold',
  },

  cancelar: {
    color: '#B7C19C',
    textAlign: 'center',
    marginTop: 15,
  },
});