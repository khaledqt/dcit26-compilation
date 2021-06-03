//BSCS3-3
//SANGCOPAN,OMAR/RUIZ,ARNEL/TOLEDO,GABRIEL
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  Button } from 'react-native';

  export default function App(){
  const[enteredItems, setEnteredItems]= useState('');
  const[inputItems, setInputItems] = useState([]);

  const addItemHandler = (enteredText) => {
    setEnteredItems(enteredText);
  };
  const addInputHandler=() =>{
    setInputItems(currentItems =>[...currentItems,enteredItems]);
    setEnteredItems('');
  };
    return (
      <View style={styles.screen}>
        
        <View style={styles.container}>
          <TextInput 
          placeholder="Enter Item"
          style={styles.input} 
          onChangeText={addItemHandler}
          value={enteredItems}
          />
          <Button title="ADD" onPress={addInputHandler}/>
          </View>
          <View>
         {inputItems.map((item) => <View key={item} style={styles.listItem}><Text>{item}
         </Text></View>)}
         </View>
         </View>
          
      
    );
  }

  const styles =StyleSheet.create({
   screen:{
     padding: 50
   },
   
   container:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center'
   },
   input:{
      width:'80%',
      borderWidth: 1, 
      borderColor: 'gray', 
      padding: 10
      
   },
   listItem:{
     padding: 10,
     marginVertical: 3,
     borderColor: 'violet',
     borderWidth: 1,
    
   
   
   }
  });
