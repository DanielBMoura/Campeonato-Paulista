import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Cabecalho = ({ titulo }) => (
  <View>
    <Text style={styles.titulo}>{titulo}</Text>
  </View>
)

const Card = ({ texto, imagem }) => (
  <View>
    <Text style={styles.texto}>{texto}</Text>
    <Image source={imagem} style={styles.imgHome} />
  </View>
)

const BotaoPersonalizado = ({ texto, onPress, icone }) => (
  <TouchableOpacity style={styles.botaoHome} onPress={onPress}>
    <Text style={styles.textoBotao}>{texto}</Text>
    <AntDesign name={icone} size={20} color="#fff" style={styles.iconeBotao} />
  </TouchableOpacity>
)

export default function Home({navigation}){
    return(
      <View style={styles.container}>
        <Cabecalho titulo="Paulistão 2025" />

        <Card
          texto="Quais são os maiores campeões da história do campeonato paulista?"
          imagem={require("../assets/imgHome.jpg")} 
        />
        <BotaoPersonalizado 
          texto="Conferir"
          icone="arrowright"
          onPress={() => navigation.navigate("Campeoes")} 
        />
      </View>

    )
}