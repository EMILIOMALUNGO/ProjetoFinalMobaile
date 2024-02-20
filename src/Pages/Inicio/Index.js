import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, Button, TouchableOpacity, View, TextInput } from "react-native";

import { useNavigation } from "@react-navigation/native";



export default function Inicio() {
    const navigation = useNavigation()
   
    return (
        <SafeAreaView style={styles.container}>
        

       <View style={styles.Image}>
         <Image style={styles.Image1} source={require("../../../assets/mundo.jpg")} />
         </View>
             <View style={styles.container3}>
                <Text style={styles.texto0} >QUADRO DE ANUNCIO</Text>
             </View>
             <Text style={styles.texto1}>Tudo sobre o seu mundo de quadro de anuncio</Text>


            <View style={styles.container4}> 
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.texto2}>Login</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.container5}>
            <TouchableOpacity onPress={() => navigation.navigate("Cadastro") }>
                    <Text style={styles.texto3}>Cadastrar</Text>
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
    Image:{
        marginTop:150,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        
    },
    Image1:{
        width: 110,
        height: 110,
        borderRadius: 100 / 2,
        borderWidth: 1,
       
    },
    container3:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
    },
    container4:{
        marginTop:50,
    },
    texto0:{
        fontSize:20
    },
    texto1:{
        marginTop:10,
        fontSize: 20,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
    },
   
    texto2: {
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
    texto3: {
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