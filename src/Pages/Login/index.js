import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, Button, TouchableOpacity, View, TextInput } from "react-native";

import { useNavigation } from "@react-navigation/native";




export default function Login() {
    const navigation = useNavigation()
   
    return (
        <SafeAreaView style={styles.container}>
             <View style={styles.container0}>
                <Text style={styles.tela0} >QUADRO DE NUNCIO</Text>
             </View>
             <Text style={styles.tela1}>Faça o seu Login</Text>

            <View style={styles.container1}>
            <View style={styles.container2}>
                <TextInput placeholder="Email" placeholderTextColor='#fff' style={styles.input} />
            </View>
            <View style={styles.container2}>
                <TextInput placeholder="Senha" placeholderTextColor='#fff' style={styles.input} />
            </View>
                <TouchableOpacity onPress={() => navigation.navigate("RecuperarSenha")}>
                    <Text style={styles.tela}>Esqueceu a Senha?</Text>
                </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("DashBoard") }>
                    <Text style={styles.tela2} placeholderTextColor='#fff'>Entrar</Text>
                </TouchableOpacity>
              
         </View>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex:2,
        backgroundColor: '#E9F556',
    },
    container0:{
        marginTop:150,
        marginStart:30,
    },
    container1:{
        marginTop:120,
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
    tela0:{
        fontSize:25,
       
    },
    tela1:{
        marginTop:25,
        fontSize: 20,
        marginStart:40,
    },
    tela:{
       marginTop:10,
      marginStart:20
    },
    tela2: {
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

   

})