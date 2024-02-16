import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

import Routes from './src/Routes/routes';

export default function App() {
  return (
    <NavigationContainer>
  <StatusBar backgroundColor='#FF7E01' barStyle='light-content'   translucent={false} />
    <Routes />
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FF7E01',
    barStyle:'light-content',
    
   
  },
});
