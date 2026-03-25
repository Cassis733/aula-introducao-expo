import { View, Text, Image } from 'react-native';

import styles from './styles';

import img1 from '../../../assets/Ferrari.jpg'; 
import img2 from '../../../assets/Fiat.jpg';
import img3 from '../../../assets/Mustang.jpg';
import img4 from '../../../assets/Toyota.jpg';

import Card from './Card';

function Atividade2() {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Atividade 2</Text>
            <Card
                titulo={'Carro 01'}
                descricao={'Ferrari'}
                preco={'R$ 1.500.000,00'}
                img={img1}
                
            />

            <Card
                titulo={'Carro 02'}
                descricao={'Fiat'}
                preco={'R$ 500,00'}
                img={img2}
            />

            <Card
                titulo={'Carro 03'}
                descricao={'Mustang'}
                preco={'R$ 500,00'}
                img={img3}
            />

            <Card
                titulo={'Carro 04'}
                descricao={'Mustang'}
                preco={'R$ 500,00'}
                img={img4}
            />

        </View>
    );
}

export default Atividade2;