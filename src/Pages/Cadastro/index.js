import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView, } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Cadastro() {
    const navigation = useNavigation()
    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.container11}>
                
                <Text  style={styles.testo}>Faça o seu Cadastro</Text>

                < ScrollView>
                <View style={styles.container12}> 


                <View style={styles.testo1}>
                    <TextInput placeholder="Digita seu nome " placeholderTextColor='#fff' style={styles.input} />
                </View >
                <View style={styles.testo1}>
                    <TextInput placeholder="Digita  seu Email" placeholderTextColor='#fff' style={styles.input} />
                </View>
                <View style={styles.testo1}>
                    <TextInput placeholder="Digita seu CPF" placeholderTextColor='#fff' style={styles.input} />
                </View>
                <View style={styles.testo1}>
                    <TextInput placeholder="Digita seu RG" placeholderTextColor='#fff' style={styles.input} />
                </View>
                <View style={styles.testo1}>
                    <TextInput placeholder="Digita seu Celular" placeholderTextColor='#fff' style={styles.input} />
                </View>
                <View style={styles.testo1}>
                    <TextInput placeholder="Digita sua Rua" placeholderTextColor='#fff' style={styles.input} />
                </View>
                <View style={styles.testo1}>
                    <TextInput placeholder="complemento" placeholderTextColor='#fff' style={styles.input} />
                </View>
                <View style={styles.testo1}>
                    <TextInput placeholder="Digita o seu Bairro " placeholderTextColor='#fff' style={styles.input} />
                </View>
                <View style={styles.testo1}>
                    <TextInput placeholder="Digita sua Cidade" placeholderTextColor='#fff' style={styles.input} />
                </View>
                <View style={styles.testo1}>
                    <TextInput placeholder="Digita o seu Estado" placeholderTextColor='#fff' style={styles.input} />
                </View>
                <View style={styles.testo1}>
                    <TextInput placeholder="Digita sua Senha " placeholderTextColor='#fff' style={styles.input} />
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.testo}>Login</Text>
                    </TouchableOpacity>
                </View>
                
                </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop:-10,
        width: "100%",
        height: 300,
        backgroundColor: '#E9F556',
    },
    container11:{
        flex:2,
        marginTop:80,
        marginStart:20,
        marginRight:20,
        backgroundColor:'#ffffff',
        borderRadius:5
    },
    testo:{
      marginTop:20,
      fontSize:20,
      textAlign:'center',
      color:'#4A515E'
    },
    container12:{
  
        marginTop:20,
        marginStart:5,
        marginRight:5,
       
     
    },
    testo1:{
        padding:12,
        borderEndWidth:1,
        backgroundColor: "#3953E5",
        borderRadius:15,
        margin:5,
        
    },
    input:{
        color:'#FFFFFF',
        margin:5,
        fontSize:13,
    },
})