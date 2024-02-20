import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";


export default function DashBoard() {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container13}>
        <Text style={styles.testo2}>Sua programação diaria você encontra aqui </Text>
      </View>

      <View style={styles.container14} >

        <View style={styles.container15}>
          <TouchableOpacity onPress={() => navigation.navigate("Big")}>
            <Text style={styles.testo3}>Grupo A</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container15}>
          <TouchableOpacity onPress={() => navigation.navigate("Big")}>
            <Text style={styles.testo3}>Grupo B</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container15}>
          <TouchableOpacity onPress={() => navigation.navigate("Big")}>
            <Text style={styles.testo3}>Grupo C</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container15}>
          <TouchableOpacity onPress={() => navigation.navigate("Big")}>
            <Text style={styles.testo3}>Grupo D</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={styles.testo4}>Veja algumas imagem do nosso quadro</Text>

          <ScrollView horizontal>
         <View  style={{flexDirection:'row'}}>
          
            <View style={styles.textImage}>
              <Image style={styles.Image} source={require("../../../assets/magem10.jpg")} />
            </View>
            <View style={styles.textImage}>
              <Image style={styles.Image} source={require("../../../assets/imagem9.jpg")} />
            </View>
            <View style={styles.textImage}>
              <Image style={styles.Image} source={require("../../../assets/imagem8.jpg")} />
            </View>
            <View style={styles.textImage}>
              <Image style={styles.Image} source={require("../../../assets/imagem7.jpg")} />
            </View>
            <View style={styles.textImage}>
              <Image style={styles.Image} source={require("../../../assets/imagem6.jpg")} />
            </View>
            
        </View>
          </ScrollView>
      </View>


    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    fle: 2,
    backgroundColor: "#ffffff",

  },
  container13: {
    marginTop: 60,
    width: '100%',
    padding: 30,

  },
  testo2: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ED212A',
  },
  container14: {
    width: '100%',
    flexDirection: "row",
    marginLeft: 'auto',
    gap: 4,

  },
  container15: {
    padding: 20,
    backgroundColor: '#000',
  },
  testo3: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#ffffff',
  },

  testo4: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    alignItems: 'center',
  },
  container16: {

  },
  text: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 30,
    color: '#D92938',
    fontWeight: 'bold',
    textAlign: "center",
  },
  Image: {
    width: "90%",
    height: 200,

  },
  textImage: {
    width: 200,
    height: 200,
    marginTop: 10,
    margin:5

  },
  text1: {
    fontSize: 20,
    color: '#F5E50A',
    marginTop: 10,
    marginLeft: 20,
  },

});