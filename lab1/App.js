// BSCS 3-3
// Ruiz, Arnel B.
// Sangcopan, Omar Khaled
// Toledo, John Gabriel

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World!</Text>

      </View>
      <View>
        <Text>DCIT 26</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
