//  BSCS3-3
//RUIZ, ARNEL
//SANGCOPAN,OMAR
//TOLEDO,GABRIEL
import React, {useState} from 'react';
import { Text,View, Button,Image, StyleSheet } from 'react-native';

import SampleModal from './components/SampleModal';

export default function App(){

  const [isBOpen, setBOpen]= useState(false);

  return (
    
    <View style={styles.container}>
      <Button title = "PRESS ME" onPress = {() => setBOpen(true)} />
      <SampleModal visible = {isBOpen} onClose = {() => setBOpen(false)} /> 
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen'
  }
});
