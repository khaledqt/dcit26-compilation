import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  ScrollView
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const About = ({navigation}) =>{
  return (
  <View>
    <View style={{height:'stretch',width:'100%', backgroundColor:'gray'}}>

    </View>

    <View style={styles.container}>   
      <Ionicons.Button style={{alignItems:'center',backgroundColor:'pink'}} name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} >Back
      </Ionicons.Button>
    </View>
  </View>
  );
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});