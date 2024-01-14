import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from '../components/AssetExample';

export default function App() {
  return (
    <View style={styles.container}> 
    <Image 
        style={styles.avatar}
        source={require('../assets/OIP-removebg-preview.png')}
      />
    <Text style={styles.title}> Selamat Datang </Text>
    <Text style={styles.subtitle1}>  Daftar untuk melanjutkan. </Text>
    <TextInput style={styles.input} placeholder="Nama Lengkap" />
    <TextInput style={styles.input} placeholder="Email" />
    <TextInput style={styles.input} placeholder="Password"secureTextEntry contextMenuHidden/>
    <TextInput style={styles.input} placeholder="Ulangi Password"secureTextEntry contextMenuHidden />
    <Text style={styles.subtitle2}>  Lupa password? </Text>
      <TouchableOpacity style={styles.button} onPress={ () => Alert.alert('berhasil daftar')}>
        <Text style={styles.text}>Daftar</Text>
      </TouchableOpacity>
       <Text style={styles.kosong}> Selamat Datang </Text>
      <Text style={styles.baseText}>
      Sudah punya akun?
      <Text style={styles.innerText}> Masuk.</Text>
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 24,
    paddingTop: 175,
    paddingBottom: 200,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle1: {
    color: 'grey',
    fontSize: 20,
    padding: 10,
  },
  avatar: {
    width: 150,
    height: 80,
    fontweight: 'bold',
    borderRadius: 15,
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f9bc07',
  },
  subtitle2: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 140,
    paddingBottom: 10,
  },
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
   baseText: {
    fontWeight: 'light',
    color: 'grey',
  },
  innerText: {
    color: '#f9bc07',
  },
  kosong: {
    color: 'white',
    fontSize: 5,
  }
});
