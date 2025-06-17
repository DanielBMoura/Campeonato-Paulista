import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './Styles';
import React, { useState } from "react";

const timesCampeoes = [
  { id: "1", nome: "Corinthians", titulos: '31 títulos', imagem: require("../assets/corinthians.jpg") },
  { id: "2", nome: "Palmeiras", titulos: '26 títulos', imagem: require("../assets/palmeiras.png") },
  { id: "3", nome: "São Paulo", titulos: '22 títulos', imagem: require("../assets/saopaulo.png") },
  { id: "4", nome: "Santos", titulos: '22 títulos', imagem: require("../assets/santos.png") },
  { id: "5", nome: "Paulistano", titulos: '11 títulos', imagem: require("../assets/paulistano.png") },
  { id: "6", nome: "São Paulo Athletic", titulos: '4 títulos', imagem: require("../assets/sp_athletic.png") },
  { id: "7", nome: "Portuguesa", titulos: '3 títulos', imagem: require("../assets/portuguesa.png") },
  { id: "8", nome: "AA das Palmeiras", titulos: '3 títulos', imagem: require("../assets/aa_palmeiras.png") },
  { id: "9", nome: "Germânia", titulos: '2 títulos', imagem: require("../assets/germania.jpg") },
  { id: "10", nome: "S/C Americano", titulos: '2 títulos', imagem: require("../assets/sc_americano.jpg") },
  { id: "11", nome: "AA São Bento", titulos: '2 títulos', imagem: require("../assets/aa_saobento.jpg") },
  { id: "12", nome: "Internacional", titulos: '2 títulos', imagem: require("../assets/internacional.png") },
  { id: "13", nome: "Ituano", titulos: '2 títulos', imagem: require("../assets/ituano.png") },
  { id: "14", nome: "São Caetano", titulos: '1 título', imagem: require("../assets/saocaetano.jpg") },
  { id: "15", nome: "Albion", titulos: '1 título', imagem: require("../assets/albion.png") },
  { id: "16", nome: "Juventus", titulos: '1 título', imagem: require("../assets/juventus.png") },
  { id: "17", nome: "Inter de Limeira", titulos: '1 título', imagem: require("../assets/interlimeira.jpg") },
  { id: "18", nome: "Red Bull Bragantino", titulos: '1 título', imagem: require("../assets/bragantino.png") },
]

const ItemTime = ({ nome, titulos, imagem }) => (
  <View style={styles.item}>
    <Image source={imagem} style={styles.imagem} />
    <View style={styles.textContainer}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.titulos}>{titulos}</Text>
    </View>
  </View>
)

const ListaTimes = ({ times }) => (
  <FlatList
    data={times}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <ItemTime {...item} />}
  />
)

export default function Campeoes({navigation}){
  const [mostrarTodos, setMostrarTodos] = useState(false)
  const dadosVisiveis = mostrarTodos ? timesCampeoes : timesCampeoes.filter(time => parseInt(time.id) <= 10)

    return(

    <View style={styles.container}>
        <Text style={styles.titulo}>Maiores Campeões do Paulistão</Text>
        <ListaTimes times={dadosVisiveis}/>

      {!mostrarTodos && (
        <TouchableOpacity style={styles.botao} onPress={() => setMostrarTodos(true)}>
          <Text style={styles.textoBotao}>Ver Mais</Text>
        </TouchableOpacity>
      )}

      {mostrarTodos && (
        <TouchableOpacity style={styles.botao} onPress={() => setMostrarTodos(false)}>
          <Text style={styles.textoBotao}>Fechar</Text>
        </TouchableOpacity>
      )}

        <TouchableOpacity style={styles.botaoHome} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.textoBotao}>Home</Text>
        </TouchableOpacity>
    </View>

  )
}