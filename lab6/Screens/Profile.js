import React, {useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet, ImageBackground} from 'react-native';
import {globalStyles} from '../Styles/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Profile = ({route}) => {
  const data = route.params;

  return (
    <ImageBackground style={globalStyles.mcontainer} source={require('./HH.png')} >
    <ScrollView style={globalStyles.pscroll}>
       <View style={globalStyles.pimage}>
          <Image style={globalStyles.pimagestyle} source={{uri: data.picture.large}}/>
          
          <View style={globalStyles.ptop}>
          <Text style={globalStyles.pname}>
            {data.name.first} {data.name.last}      
          </Text>
          </View>
        </View>
        <View style={globalStyles.pabout}>
        <View style={{marginTop:15}}>        
          <Text style={{textDecorationLine:"underline", opacity:.5}}>            
           <Ionicons name="person" size={15} color="black" />About__________________
          </Text>
        </View>

      <View>
        <Text style={{marginTop:5, fontSize:13}}>
          Age: {data.dob.age}{"\n"}
          Birthday: {data.dob.date}{"\n"}
          Gender: {data.gender}{"\n"}
          Address: {data.location.street.number}, {data.location.street.name},{data.location.city}, {data.location.state}, {data.location.country}
        </Text>
      </View>
      <View style={{marginTop:10}}>        
          <Text style={{textDecorationLine:"underline", opacity:.5}}>            
           <Ionicons name="person-add-sharp" size={15} color="black" />Contact_________________
          </Text>
          <Text>
             E-mail: {data.email}{"\n"}
             Phone: {data.cell}{"\n"}
          </Text>
        </View>
        <View style={{marginTop:10}}>        
          <Text style={{textDecorationLine:"underline", opacity:.5}}>            
           <AntDesign name="infocirlce" size={15} color="black" />Other___________________
          </Text>
          <Text>
            Date Registered: {data.registered.date}{"\n"}

          </Text>
        </View>
      </View>
    </ScrollView>
    </ImageBackground>
  );
};
export default Profile;

