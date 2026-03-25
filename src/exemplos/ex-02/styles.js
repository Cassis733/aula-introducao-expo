import { StyleSheet } from 'react-native'; 

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8,
        Flex: 1,
        alignItems: 'center',
        borderRadius: 20,
    }, 
    titulo: {
        fontSize: RFPercentage(3), // tamanho da fonte
        color: 'deepskyblue',
        fontWeight: 'bold',
        dorderWiddth: 2,
        dorderColor: 'deepskypblue',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        widght: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 20,

    }, 
    imagem: {
        // height: RFPercentage(10), 
        // width: RFPercentage(28),  
        width: '80%', 
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