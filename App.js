import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';
import { useState } from 'react';
import Component from './Component';
const App=()=>{

  
   return(

     <View>
   <Component/>
     </View>
  );


}

export default App;
//Create a components with a button and a Text component tht displays a counter.
// when button is clicked the counter should be updated.