import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Exemplo01 from './src/exemplos/ex-01';

import Atividades01 from './src/Atividades01';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividades01/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d85c09',
    padding: 16,
    // alignItems: 'center',
    // justifyContent: 'center',
  }, 
    
});
