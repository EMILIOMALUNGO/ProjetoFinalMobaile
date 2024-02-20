import React from "react";
import {Text,View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Inicio from "../Pages/Inicio/Index";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import RecuperarSenha from "../Pages/RecuperarSenha";
import DashBoard from "../Pages/DashBoard";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


 function Tabs(){

    return(
        <Tab.Navigator>

          <Tab.Screen name="DashBoard" component={DashBoard} options={{ headerShown: false}} />

        </Tab.Navigator>   
   
    )
}


export default function Routes (){

    return(
     <Stack.Navigator>
          <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
             <Stack.Screen name="Cadastro" component={Cadastro}options={{ headerShown: false}} />
             <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ headerShown: false}}/>
             <Tab.Screen
             name="DashBoard" 
             component={Tabs} options={{ headerShown: false}}/>
   </Stack.Navigator>
    )
}