import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Exemplo01 from './src/exemplos/ex-01';
import Exemplo02 from './src/exemplos/ex-02';
import Exemplo03 from './src/exemplos/ex-03';
import Exemplo04 from './src/exemplos/ex-04';



import Atividades01 from './src/atividades/atv-01';
import Atividades02 from './src/atividades/atv-02';
import Atividades03 from './src/atividades/atv-03';
import Atividades04 from './src/atividades/atv-04';




export default function App() {
  return (
    <View style={styles.container}>
      <Atividades04 />
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
