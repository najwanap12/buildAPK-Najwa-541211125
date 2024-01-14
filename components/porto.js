import { Image, Text, SafeAreaView, StyleSheet, View, TouchableOpacity, Alert, ScrollView } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from '../components/AssetExample';

export default function App() {
  return (
   <View style={styles.container}>
   
   <Image 
        style={styles.avatar}
        source={require('../assets/me.jpeg')}
      />
    <Text style={styles.title}>Naya</Text>
    <Text style={styles.subtitle}>Halo! Nama saya Najwa Nararya Ayuni Putri, biasa dipanggil Naya. Saya lahir di Purwokerto, 12 Januari 2006. Saya bersekolah di SMK Telkom Purwokerto dengan jurusan RPL. </Text>
     <TouchableOpacity style={styles.button} onPress={ () => Alert.alert('+6213456789')}>
        <Text style={styles.text}>Contact Me</Text>
      </TouchableOpacity>
      <Text style={styles.title2}>My Recent Project</Text>
      <ScrollView style={styles.scrollView}>
      <Image 
        style={styles.avatar2}
        source={require('../assets/wcj.png')}
      />
      <Text style={styles.subtitle2}> WISH CLEAN JUICE </Text>
      <Text style={styles.subtitle5}> Membuat design web e-commerce yang menjual jus sehat. </Text>
      <Image 
        style={styles.avatar3}
        source={require('../assets/dietyuk.png')}
      />
      <Text style={styles.subtitle3}> DIET YUK </Text>
      <Text style={styles.subtitle5}> Membuat design aplikasi yang membantu progress diet. </Text>
      <Image 
        style={styles.avatar4}
        source={require('../assets/arisan.png')}
      />
      <Text style={styles.subtitle4}> ARISAN SAY </Text>
      <Text style={styles.subtitle5}> Membuat design web untuk arisan online. </Text>
      <Image 
        style={styles.avatar5}
        source={require('../assets/redesign.png')}
      />
      <Text style={styles.subtitle6}> SUPER CAT </Text>
      <Text style={styles.subtitle5}> Meredesign produk makanan basah kucing. </Text>
       </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: 'black',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    color: '#f47373',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 12,
    paddingBottom: 15,
    textAlign: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    fontweight: 'bold',
    borderRadius: 100,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f47373',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
   title2: {
    color: '#f47373',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'center',
  },
  avatar2: {
    width: 300,
    height: 180,
    fontweight: 'bold',
    borderRadius: 5,
    textAlign: 'center',
  },
   subtitle2: {
    color: '#f47373',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 5,
    textAlign: 'center',
  },
  avatar3: {
    width: 300,
    height: 200,
    fontweight: 'bold',
    borderRadius: 5,
    
  },
   subtitle3: {
    color: '#f47373',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 5,
    textAlign: 'center',
  },
  avatar4: {
    width: 300,
    height: 180,
    fontweight: 'bold',
    borderRadius: 5,
    
  },
   subtitle4: {
    color: '#f47373',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 5,
    textAlign: 'center',
  },
  subtitle5: {
    color: 'white',
    fontSize: 12,
    paddingBottom: 15,
    textAlign: 'center',
  },
  avatar5: {
    width: 300,
    height: 180,
    fontweight: 'bold',
    borderRadius: 5,
    
  },
   subtitle6: {
    color: '#f47373',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 5,
    textAlign: 'center',
  },
});


