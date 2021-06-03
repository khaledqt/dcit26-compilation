import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.picture} source={require('./Capture.PNG')} />
        <AntDesign.Button style={{justifyContent:'center'}} name="profile" size={24} color="black" backgroundColor="pink" onPress={() => navigation.navigate('Profile')}> Profile </AntDesign.Button>        
        <ScrollView>
          <Text style={styles.title}>Hanime Heaven</Text>
          <Text style={styles.texts}>
            Hanime Haven (HH) is a streaming website like no other. Where
            watching is not just an entertainment but passion.
          </Text>
          <Image style={styles.images} source={require('./ichika.png')} />
          <Text style={{ fontWeight: 'bold', margin: 5,textAlign:'center' }}> My Waifu, Ichika Nakono</Text>
          <Image style={styles.images} source={require('./miku.jpg')} />
          <Text style={{ fontWeight: 'bold', margin: 5 ,textAlign:'center'}}> UWU my miku</Text>
          <Image style={styles.images} source={require('./asdad.png')} />
          <Text> Sorry sir, wala na po akong maisip na design HAHAHAHA</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECECEC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    marginTop: 10,
    marginBottom: 10,
    width:'stretch',
    height: 200,
    borderRadius: 5,
  },
  title: {
    marginTop: 21,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'center',
  },
  texts: {
    margin: 10,
    textAlign:'center'

  },
  images: {
    width: 'stretch',
    height: 200,
    borderRadius: 5,
    margin: 5,
  },
});
