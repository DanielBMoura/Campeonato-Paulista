import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    titulo: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20
    },
    texto: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 40
    },
    imgHome: {
      width: 400,
      height: 220,
      marginBottom: 40
    },
    botaoHome: {
      backgroundColor: 'black', 
      paddingVertical: 18,
      paddingHorizontal: 30,
      borderRadius: 12,
      marginTop: 10,
      flexDirection: 'row', 
      alignItems: 'center'
    },
    iconeBotao: {
      marginLeft: 20
    },
    textoBotao: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    item: { 
      flexDirection: "row", 
      alignItems: "center",
      padding: 40, 
      borderBottomWidth: 1, 
      borderColor: "#ddd"
    },
    imagem: { 
      width: 85, 
      height: 85, 
      marginRight: 105
    },
    textContainer: {
      flexDirection: "column",
      alignItems: "flex-start", 
    },
    nome: { 
      fontSize: 18, 
      fontWeight: "bold",
      marginBottom: 10
    },
    titulos: { 
      fontSize: 18 
    },
    botao: { 
      marginTop: 20, 
      marginBottom: 20, 
      padding: 10, 
      backgroundColor: "#007AFF", 
      borderRadius: 5 
    }
  });

export {styles}