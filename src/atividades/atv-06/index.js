import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';
// import { setStyleAttributePreprocessor } from 'react-native/types_generated/Libraries/StyleSheet/StyleSheetExports';

export default function Atividades06() {
    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const mensErro = 'Valores inseridos de forma incorreta!';
    const [mensagem, setMensagem] = useState(null);

    function calculaImc() {
        const tmpImc = peso / (altura * altura);
        setImc(tmpImc);
        
        if (isNaN(tmpImc)|| !peso || !altura){
            setMensagem(mensErro);
            return;
        }

        if (tmpImc < 18,5) {
            setMensagem('Você está abaixo do peso');
        } 
         if (tmpImc > 18.5 && tmpImc <24.9) {
            setMensagem('Você esta no peso normal');
        }
         if (tmpImc > 25  && tmpImc < 29.9) {
            setMensagem('Você esta com sobrepse');
        }
         if (tmpImc > 30 && tmpImc < 34.9) {
            setMensagem('Você esta com OBESIDADE GRAU I');
        }
         if (tmpImc > 35 && tmpImc < 39.9) {
            setMensagem('Você esta no OBESIDADE GRAU II');
        }
        if  (tmpImc  > 40){
            setMensagem('Você esta com OBESIDADE GRAU III');
        } 
    }  
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade06</Text>
            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura} />
            </View>

            <Text style={styles.imc}>{isNaN(imc) ? mensErro : imc.toFixed(2)}</Text>

            {/* <Text style={[styles.imc, styles.txtMensgem]}>Mensagem</Text> */}
            <Text style={[styles.imc, styles.txtMensgem]}>{mensagem}</Text>

            <Botao calcular={calculaImc}>Calcular</Botao>
        </View>
    )

}