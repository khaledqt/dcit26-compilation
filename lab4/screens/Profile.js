import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView
} from "react-native";
import { Entypo } from '@expo/vector-icons';

const Profile = ({navigation}) =>{
  return (
  <View style={{height:'100%', width:'100%'}}>
    <ScrollView>
    <View  style={styles.section}>
      <View style={{width:'98%', height:100,backgroundColor:'pink',margin:5}}>
        <ImageBackground style={{margin:5, height:90, width:'98.5%'}} source={require('./tags.PNG')}>
        <Text style={{fontWeight:'bold', textAlign:'center', marginTop:35, color:'#FFEFDB'}}>
         Omar Khaled Sangcopan
        </Text>
        </ImageBackground>
      </View>
    </View>
     <View  style={styles.section}>
      <View style={{width:'98%', height:100,backgroundColor:'purple',margin:5}}>
        <ImageBackground style={{margin:5, height:90, width:'98.4%'}} source={require('./arnel.png')}>
          <Text style={{fontWeight:'bold', textAlign:'center', marginTop:35, color:'#DAA520'}}>
          Arnel Ruiz
          </Text>
          </ImageBackground>
      </View>
     </View>
     <View  style={styles.section}>
      <View style={{width:'98%', height:100,backgroundColor:'black',margin:5}}>
        <ImageBackground style={{margin:5, height:90, width:'98.5%'}} source={require('./futaro.png')}>
          <Text style={{fontWeight:'bold', textAlign:'center', marginTop:35, color:'#304E52'}}>
           John Gabriel Toledo
          </Text>
          </ImageBackground>
      </View>
     </View>
    <Entypo.Button style={{backgroundColor:'pink', justifyContent:'center',margin:5}} name="info" size={24} color="black" onPress={() => navigation.navigate('About')} > About
    </Entypo.Button>
    </ScrollView>
  </View>  
    );
}

export default Profile;

const styles = StyleSheet.create({
  section: {
    flex:1,
    justifyContent:'flex-start',
    alignItems:'flex-start',
  }

});