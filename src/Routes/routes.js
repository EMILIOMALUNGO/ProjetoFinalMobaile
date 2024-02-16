import React from "react";
import {Text,View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import RecuperarSenha from "../Pages/RecuperarSenha";

const Tab = createBottomTabNavigator();

export default function Routes(){

    return(
        <Tab.Navigator>

            <Tab.Screen name="Login" component={Login} options={{ headerShown: false}} />
             <Tab.Screen name="Cadastro" component={Cadastro} />
             <Tab.Screen name="RecuperarSenha" component={RecuperarSenha} />

        </Tab.Navigator>
   
     
   
    )
}