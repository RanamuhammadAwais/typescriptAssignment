
import { StyleSheet, Text, View, Button ,TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.FlexForToDo}><TextInput style={styles.textInput} placeholder='Add your to do'/>
    <Button style={styles.button} title='Log in'/>
    </View>
    <View>
      <Text> hi boys zeeshan is here today </Text>
    </View>

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:30,
  
  },
  FlexForToDo:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'60%',
    margin:5,  
    padding:5,
  },
  button:{
    borderWidth:10,
    width:'20%',
    
  }
});
