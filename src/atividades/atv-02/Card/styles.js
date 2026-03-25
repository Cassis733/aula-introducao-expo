import { StyleSheet } from 'react-native';  

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: RFPercentage(0.5), 
        borderColor: 'darkslategrey', 
        padding: RFPercentage(1.5), 
        borderRadius: RFPercentage(1.5), 
        width: '90%', 
        alignItems: 'center', 
        marginBottom: RFPercentage(1), 
    }, 

    containerItens: {
             
            width: '70%', 
            alignItems: 'center' 
        }, 

    titulo: {
        fontSize: RFPercentage(3.5), 
        fontWeight: 'bold', 
        color: 'darkslategrey', 
    }, 

    descricao: {
        fontSize: RFPercentage(2.5), 
        fontWeight: 'bold', 
        color: 'darkslategrey', 
    }, 

    preco: {
        fontSize: RFPercentage(3.5), 
        fontWeight: 'bold', 
        color: '#e42c2c', 
    }, 

    mensagem: {
        fontSize: RFPercentage(2), 
        color: '#222',
    }, 
    
    imagem: {
       height: RFPercentage(16), 
        width: RFPercentage(10),  
       //width: '40%', 
       resizeMode: 'contain', 
        // filter: 'grayscale(80%)', 
        // filter: 'sepia(80%)', 
        // filter: 'saturate(10%)', 
        //filter: 'brightness(30%)', 
        // filter: 'contrast(50%)', 
        // filter: 'invert(100%)', 
    }, 
});

export default styles;