import { StyleSheet, TextInput, } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from '../components/AssetExample';

const CustomInput = (props) => {
  return (
    <TextInput style={styles.input} placeholder="Email" />
  );
}

const styles = StyleSheet.create({
  
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f9bc07',
  },
  
});

export default CustomInput;
