import { StyleSheet, Text, View , Button, TextInput} from 'react-native';
// import { } from 'react-native-web';
import { useState } from 'react';

const Component =()=>{
let [counter, setCounter] = useState(0);

return(
    <View style={{padding: 50}}>
              <Button 
                   onPress={() => {setCounter(counter+1)}} 
                   title="click"
                /> 
                    <Text style={{fontSize: 20, paddingTop:16}}>{counter}</Text>
     </View>
);


}
export default Component;