import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Screens/Home';
import Profile from '../Screens/Profile';

const Stack = createStackNavigator();

const MainStack =  () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Profile" component={Profile}/>       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;