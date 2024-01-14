import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from '../components/AssetExample';

const CustomButton = () => {
  return (
    
      <TouchableOpacity style={styles.button} onPress={ () => Alert.alert('berhasil masuk')}>
        <Text style={styles.text}>Masuk</Text>
      </TouchableOpacity>
      
  );
}

const styles = StyleSheet.create({
  
    button: {
    alignItems: 'center',
    backgroundColor: 'black',
    textColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: 250,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  
});


export default CustomButton;