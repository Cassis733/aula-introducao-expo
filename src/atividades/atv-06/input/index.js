import { TextInput } from 'react-native';

import styles from './styles';

function Input({placeholder, valor, atualizaValor}) {
    return (
        <TextInput
            style={[styles.input, {outline: 'nome'}]}
            placeholder={placeholder}
            placeholderTextColor='lightgray'
            keyboardType='numeric'
            onChangeText={vlr => atualizaValor(vlr)}
        />
    );
}

export default Input;
