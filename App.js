import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Background from './components/Background'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: 15,
          backgroundColor: 'black',
        }}
      >
        <FontAwesome name="android" size={50} color="#B6DA9F" />
        <Text style={{ marginLeft: 10, fontSize: 30, color: 'white' }}>
          Wallpaper
        </Text>
      </View>
      <Background />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
})
