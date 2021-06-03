import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text, ActivityIndicator, TouchableOpacity, ImageBackground} from 'react-native';
import Profile from './Profile';
import { globalStyles } from '../Styles/globalStyles';
import { Entypo } from '@expo/vector-icons';

const Home = ({navigation}) => {
  const [data, setData] = useState ([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() {
    setLoading(true);
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results[0]);
        console.log(json.results[0]);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }
  
  useEffect(() => {
    fetchRandomData();
  }, []);

  return (
    <ImageBackground style={globalStyles.mcontainer} source={require('./HH.png')} >
    <View style={globalStyles.hView}>
      <View style={globalStyles.hitems}>
        <Text style={{fontWeight:"bold",fontSize:30}}>HANAP HABIBI    </Text>
        <Image style={globalStyles.logo} source={require('./HH.png')}/>       
      </View>  
    </View>    
      <View style={globalStyles.topView}>
        {isLoading ? ( <ActivityIndicator size="large" color="#fff" /> ) : ( <>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Profile', data)}> 
          <Image style = {globalStyles.image} 
          source={{uri: data.picture.large}} /> 
        </TouchableOpacity> 
        <View style={{backgroundColor:"pink",borderRadius: 10}}>
          <Text style={globalStyles.name}>
             {data.name.first} {data.name.last}, {data.dob.age}
          </Text>
        </View>                   
        </>)}
      </View>
      <View style={globalStyles.btnView}>
        <TouchableOpacity style={globalStyles.btn} onPress={fetchRandomData}>
          <Text style={globalStyles.btn}>
            <Entypo name="shuffle" size={24} color="black" /> Shuffle
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home; 

