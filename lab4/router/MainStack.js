import React from "react";
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator style={{height:50}}>     
        <Drawer.Screen name="Home" component={HomeStack} options ={{ title:'Home', 
drawerIcon: ({focused,size})=> ( <AntDesign name="home" size={24} color="#00203FF"/> )}}/>
        <Drawer.Screen name="About" component={AboutStack} options = {{ title:'About',
drawerIcon: ({focused,size}) => (
        <AntDesign name="infocirlceo" size={24} color="black" />)}}/>
        
      </Drawer.Navigator>
    </NavigationContainer>
    );
  }

  export default MainNavigator;

const styles = StyleSheet.create({
  drawer: {
    marginTop: 100,
  }
})