import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, Button, TouchableOpacity, View, TextInput } from "react-native";

import { useNavigation } from "@react-navigation/native";




export default function Login() {
    const navigation = useNavigation()
   
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.container1}>

            <View style={styles.container2}>
                <TextInput placeholder="Email" placeholderTextColor='#fff' style={styles.input} />
            </View>
            <View style={styles.container2}>
                <TextInput placeholder="Senha" placeholderTextColor='#fff' style={styles.input} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Dashiboard") }>
                    <Text style={styles.tela1} placeholderTextColor='#fff'>Entrar</Text>
                </TouchableOpacity>
                <View style={styles.container3}>
                <TouchableOpacity onPress={() => navigation.navigate("Cadastrar")}>
                    <Text style={styles.tela2}>Cadastra</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Cadastrar")}>
                    <Text style={styles.tela2}>Alterar Senha</Text>
                </TouchableOpacity>
         </View>

                </View>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',  
    },
    container1:{
        marginTop:200
    },
    container2:{
        padding:15,
        borderEndWidth:1,
        backgroundColor: "#3953E5",
        borderRadius:20,
        marginStart:10,
        marginRight:10,
        margin:10
             
    },
    input:{
        color:'#FFFFFF',
        margin:5,
        fontSize:15,
    },
    tela1: {
        marginStart:30,
        marginRight:30,
        fontSize:15,
        marginTop: 30,
        marginBottom: 5,
         padding:15,
        borderWidth: 1,
        color:'#ffffff',
        backgroundColor: "#342246",
        borderRadius:3,
        textAlign:"center",
    },
    container3:{
      
      flexDirection:'row',
      marginTop:50,
      justifyContent:'space-evenly',
      
    },
    tela2:{ 
        color:'#ffffff',
        padding:10,
        borderWidth: 1,
        borderRadius:3,
        backgroundColor: "#6B10C6",
        textAlign:"center"
    },
 

})